import React, { useState, useEffect, useRef } from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import MenuContainer from "../containers/MenuContainer";
import AlgorithmsContainer from "../containers/AlgorithmsContainer";
import md5 from "md5"; // This library let's us generate a hashed key for algos

import { generateSteps } from "../util/algorithmHelper";

const App = () => {
  const [algos, setAlgos] = useState([]);

  const [intervalSpeed, setIntervalSpeed] = useState(500);

  const [arraySize, setArraySize] = useState(10);

  const [isRunning, setIsRunning] = useState(false);

  const menuSelect = algoName => {
    if (algos.length >= 8)
      return alert("You can only selected 8 algorithms at a time.");

    const algo = {
      name: algoName,
      key: md5(Date.now()),
      steps: generateSteps(algoName, arraySize),
      currentStep: 0
    };

    const updatedAlgos = [...algos, algo];
    setAlgos(updatedAlgos);
  };

  const pauseIfAllFinished = () => {
    return algos.find(algo => algo.currentStep !== algo.steps.length - 1)
      ? null
      : stepPause();
  };

  const stepForward = algo => {
    algo.currentStep += 1;
    if (algo.currentStep >= algo.steps.length)
      algo.currentStep = algo.steps.length - 1;
    pauseIfAllFinished();
  };

  const stepBack = algo => {
    algo.currentStep -= 1;
    if (algo.currentStep <= 0) algo.currentStep = 0;
  };

  const stepReset = algo => {
    algo.currentStep = 0;
  };

  const stepPlay = () => {
    setIsRunning(true);
  };

  const stepPause = () => {
    setIsRunning(false);
  };

  const controllerMap = {
    forward: stepForward,
    back: stepBack,
    reset: stepReset,
    play: stepPlay,
    pause: stepPause
  };

  const changeStep = direction => {
    let updateAlgos = [...algos];
    updateAlgos.map(algo => {
      controllerMap[direction](algo);
    });
    setAlgos(updateAlgos);
  };

  const removeAlgo = algoKey => {
    const updatedAlgos = algos.filter(algo => algo.key !== algoKey);
    setAlgos(updatedAlgos);
  };

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      const stepTick = () => {
        savedCallback.current();
      };
      if (delay !== null) {
        let id = setInterval(stepTick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(
    () => {
      changeStep("forward");
    },
    isRunning ? intervalSpeed : null
  );

  const handleControllerClick = direction => {
    changeStep(direction);
  };

  const useKeyDown = (targetKey, callback, canUseWhenPlaying) => {
    const useable = () => canUseWhenPlaying || canUseWhenPlaying === isRunning;

    const handleKeyDown = ({ key }) =>
      key === targetKey && useable() && callback();

    useEffect(() => {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    });
  };

  useKeyDown(" ", isRunning ? stepPause : stepPlay, true);
  useKeyDown("ArrowRight", () => changeStep("forward"), false);
  useKeyDown("ArrowLeft", () => changeStep("back"), false);
  useKeyDown("r", () => changeStep("reset"), false);

  return (
    <div className="App">
      <Container
        fluid
        textAlign="center"
        style={{ background: "#343A40", height: "5vh" }}
      >
        <Header as="h2" style={{ color: "#FFF" }}>
          Algos 📊
        </Header>
      </Container>
      <Container fluid>
        <Grid columns={2} stackable>
          <Grid.Column width={3}>
            <MenuContainer menuSelect={menuSelect} />
          </Grid.Column>
          <Grid.Column width={12}>
            <AlgorithmsContainer
              algos={algos}
              removeAlgo={removeAlgo}
              intervalSpeed={intervalSpeed}
              setIntervalSpeed={setIntervalSpeed}
              controls={controllerMap}
              handleClick={handleControllerClick}
              isRunning={isRunning}
              arraySize={arraySize}
              setArraySize={setArraySize}
            />
          </Grid.Column>
        </Grid>
      </Container>
      <Container
        fluid
        textAlign="center"
        style={{
          background: "#343A40",
          height: "5vh",
          position: "fixed",
          bottom: "0"
        }}
      >
        <Header as="h3" style={{ color: "#FFF" }}>
          Algos
        </Header>
      </Container>
    </div>
  );
};

export default App;
