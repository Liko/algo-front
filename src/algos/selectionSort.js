import {
  generateRandomArray,
  addCheckOrSwapStep
} from "../util/algorithmHelper";

import cloneDeep from "lodash/cloneDeep";

const selectionSort = (size = 10) => {
  const arr = generateRandomArray(size);

  // Initialize steps, which will keep track of array element positions at each cycle
  const steps = [cloneDeep(arr)];

  // Finally, perform a selection sort on the shuffled array
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      addCheckOrSwapStep(min, j, arr, steps, "checking");
      if (arr[min].value > arr[j].value) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
      addCheckOrSwapStep(i, min, arr, steps, "moving");
    }
    arr[i].isSorted = true;
  }

  steps.push(arr);
  return steps;
};

export default selectionSort;
