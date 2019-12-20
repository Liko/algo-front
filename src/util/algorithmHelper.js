import bubbleSort from "../algos/bubbleSort";

//mapping between algorithm name derived from Menu Container and the associated sorting script.
// TODO replace placeholder bubbleSort with real sorts when ready
const algoMap = {
  "Bubble Sort": bubbleSort,
  "Quick Sort": bubbleSort,
  "Merge Sort": bubbleSort,
  "Radix Sort": bubbleSort,
  "Tree Sort": bubbleSort
};

export const generateSteps = name => {
  return algoMap[name]();
};
