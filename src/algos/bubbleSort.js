import {
  generateRandomArray,
  addCheckOrSwapStep
} from "../util/algorithmHelper";

import cloneDeep from "lodash/cloneDeep";

const bubbleSort = (size = 10) => {
  const arr = generateRandomArray(size);

  // Initialize steps, which will keep track of array element positions at each cycle
  const steps = [cloneDeep(arr)];

  // Finally, perform a bubble sort on the shuffled array
  let swap = true;
  let lastUnsortedElement = arr.length;
  while (swap) {
    swap = false;
    for (let i = 0; i < lastUnsortedElement; i++) {
      if (arr[i + 1] && arr[i + 1].isSorted === false) {
        addCheckOrSwapStep(i, i + 1, arr, steps, "checking");
        if (arr[i].value > arr[i + 1].value) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          addCheckOrSwapStep(i, i + 1, arr, steps, "moving");
          swap = true;
        }
      } else {
        arr[i].isSorted = true;
        lastUnsortedElement--;
      }
    }
  }
  steps.push(arr);
  return steps;
};

export default bubbleSort;
