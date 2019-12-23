import bubbleSort from "../algos/bubbleSort";
import mergeSort from "../algos/mergeSort";

//mapping between algorithm name derived from Menu Container and the associated sorting script.
// TODO replace placeholder bubbleSort with real sorts when ready
const algoMap = {
  "Bubble Sort": bubbleSort,
  "Quick Sort": bubbleSort,
  "Merge Sort": mergeSort,
  "Radix Sort": bubbleSort,
  "Tree Sort": bubbleSort
};

// Build an array of a given size; this array will mutate
const createUniqueArray = size => {
  const arr = [];
  for (let i = 1; i < size + 1; i++) {
    arr.push({ value: i, status: "idle" });
  }
  return arr;
};

// Shuffle the built array using Dursetenfeld method
// Alternatively, could use _.js library's .shuffle() method
const shuffleArray = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const generateRandomArray = size => {
  return shuffleArray(createUniqueArray(size));
};

export const generateSteps = name => {
  return algoMap[name]();
};
