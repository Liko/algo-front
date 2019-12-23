import { generateRandomArray } from "../util/algorithmHelper";

import cloneDeep from "lodash/cloneDeep";

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
        let step = cloneDeep(arr); // make deep copy of array, and copy step along with status to steps. afterwards, this deeply cloned step is not needed.
        step[i].status = "checking";
        step[i + 1].status = "checking";
        steps.push(step);

        if (arr[i].value > arr[i + 1].value) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // swap elements so that the greater of the two 'moves' towards the end of the array
          let step = cloneDeep(arr); // because array is mutating, we need a snapshot of it, capturing the moving status. afterwards, deeply cloned step is not needed.
          step[i].status = "moving";
          step[i + 1].status = "moving";
          steps.push(step);
          swap = true;
        }
      }
    }
  }
  steps.push(arr);
  return steps;
};

export default bubbleSort;
