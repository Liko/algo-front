import { generateRandomArray } from "../util/algorithmHelper";

import cloneDeep from "lodash/cloneDeep";

// make deep copy of array, and copy step along with status to steps. afterwards, this deeply cloned step is not needed.
//currently used in bubble sort
const addStep = (index, array, steps, status) => {
  let step = cloneDeep(array);
  step[index].status = status;
  step[index + 1].status = status;
  steps.push(step);
};

const bubbleSort = (size = 10) => {
  const arr = generateRandomArray(size);

  // Initialize steps, which will keep track of array element positions at each cycle
  const steps = [[...arr]];

  // Finally, perform a bubble sort on the shuffled array
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1]) {
        addStep(i, arr, steps, "checking");
        if (arr[i].value > arr[i + 1].value) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // swap elements so that the greater of the two 'moves' towards the end of the array
          addStep(i, arr, steps, "moving");
          swap = true;
        }
      }
    }
  }
  steps.push(arr);
  return steps;
};

export default bubbleSort;
