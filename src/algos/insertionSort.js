import {
  generateRandomArray,
  addCheckOrSwapStep
} from "../util/algorithmHelper";

const insertionSort = (size = 10) => {
  const arr = generateRandomArray(size);

  // Initialize steps, which will keep track of array element positions at each cycle
  const steps = [[...arr]];

  // Finally, perform a insertion sort on the shuffled array
  // Begin at index position 1
  let i = 1;
  while (i < arr.length) {
    /// Initialize x as the key element for comparison
    let x = arr[i];
    // Compare key value against element value at the previous position
    let j = i - 1; // begins at 0
    addCheckOrSwapStep(i, j, arr, steps, "checking");
    while (j >= 0 && arr[j].value > x.value) {
      // Swap occurs here
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      addCheckOrSwapStep(j, j + 1, arr, steps, "moving");
      j = j - 1;
    }
    // Key element is inserted here
    arr[j + 1] = x;
    // Increments index here
    i = i + 1;
  }

  console.log("Number of steps: ", steps.length);
  steps.push(arr);
  return steps;
};

export default insertionSort;
