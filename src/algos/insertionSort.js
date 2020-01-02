import {
  generateRandomArray,
  addCheckOrSwapStep,
  addInsertStep
} from "../util/algorithmHelper";

import cloneDeep from "lodash/cloneDeep";

const insertionSort = (size = 10) => {
  const arr = generateRandomArray(size);

  // Initialize steps, which will keep track of array element positions at each cycle
  const steps = [cloneDeep(arr)];

  // Finally, perform a insertion sort on the shuffled array
  // Begin at index position 1
  let i = 1;
  arr[0].isSorted = true;
  while (i < arr.length) {
    /// Initialize x as the key element for comparison
    let x = arr[i];
    // Compare key value against element value at the previous position
    let j = i - 1; // begins at 0
    addCheckOrSwapStep(i, j, arr, steps, "checking");
    while (j >= 0 && arr[j].value > x.value) {
      // Swap occurs here
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      addInsertStep(j, arr, steps, "moving");
      j = j - 1;
    }
    // Key element is inserted here
    arr[j + 1] = x;
    arr[j + 1].isSorted = true;
    // Increments index here
    i = i + 1;
  }

  steps.push(arr);
  return steps;
};

export default insertionSort;
