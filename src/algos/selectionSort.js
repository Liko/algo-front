import { generateRandomArray } from "../util/algorithmHelper";

import cloneDeep from "lodash/cloneDeep";

// make deep copy of array, and copy step along with status to steps. afterwards, this deeply cloned step is not needed.
// currently used in bubble sort
const addStep = (index, array, steps, status) => {
  let step = cloneDeep(array);
  // add status for each step[index] is incorrect. must refactor lines 10-11.
  step[index].status = status;
  step[index + 1].status = status;
  steps.push(step);
};

const selectionSort = (size = 10) => {
  const arr = generateRandomArray(size);

  // Initialize steps, which will keep track of array element positions at each cycle
  const steps = [[...arr]];

  // Finally, perform a selection sort on the shuffled array
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    addStep(i, arr, steps, "checking");

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min].value > arr[j].value) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
      addStep(i, arr, steps, "moving");
    }
  }
  // }
  steps.push(arr);
  return steps;
};

export default selectionSort;
