import {
  generateRandomArray,
  addStep,
  addInsertStep
} from "../util/algorithmHelper";

const clearStatus = array => {
  return array.map(el => {
    return { ...el, status: "idle" };
  });
};

const mergeSort = (size = 10) => {
  const array = generateRandomArray(size);

  // Initialize steps, which will keep track of array element positions at each cycle
  const steps = [[...array]];

  const mergeSortReal = array => {
    //if the array length is less than 2, return, which will in the future invoke the merger method
    if (array.length < 2) return array;

    const middle = Math.floor(array.length / 2);

    //split the array in half
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    //recursively keep splitting the array in half until length of both left and right halves are less than two
    return merger(mergeSortReal(left), mergeSortReal(right));
  };

  const merger = (left, right) => {
    const array = [];

    while (left.length && right.length) {
      const prevStep = steps[steps.length - 1];

      const leftIndex = prevStep.findIndex(
        step => step.value === left[0].value
      );

      const rightIndex = prevStep.findIndex(
        step => step.value === right[0].value
      );

      addStep(leftIndex, rightIndex, clearStatus(prevStep), steps, "checking");

      if (left[0].value < right[0].value) {
        array.push(left.shift());
      } else {
        array.push(right.shift());
        let newStep = clearStatus(prevStep);
        // [newStep[leftIndex], newStep[rightIndex]] = [
        //   newStep[rightIndex],
        //   newStep[leftIndex]
        // ];

        console.log(newStep);
        const lol = newStep.splice(rightIndex, 1);
        newStep.splice(leftIndex, 0, lol[0]);

        console.log(newStep);

        addInsertStep(leftIndex, newStep, steps, "moving");
      }

      let step = [...array, ...left, ...right];

      const remainder = step.filter(el => !array.includes(el));

      // if (remainder.length && left.length) {
      //   if (remainder[0].value === left[0].value) {
      //     let newStep = clearStatus(prevStep);
      //     [newStep[leftIndex], newStep[rightIndex]] = [
      //       newStep[rightIndex],
      //       newStep[leftIndex]
      //     ];
      //     addStep(leftIndex, rightIndex, newStep, steps, "moving");
      //   }
      // }

      // if (
      //   step.length === size &&
      //   differentArray(step, steps[steps.length - 1])
      // ) {
      //   steps.push([...array, ...left, ...right]);
      // }
    }

    return [...array, ...left, ...right];
  };

  mergeSortReal(array);
  steps.push(clearStatus(steps[steps.length - 1]));
  return steps;
};

const differentArray = (arr1, arr2) => {
  return !arr1.every((val, i) => val === arr2[i]);
};

export default mergeSort;
