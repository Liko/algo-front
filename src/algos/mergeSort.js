import {
  generateRandomArray,
  addStep,
  clearStatus
} from "../util/algorithmHelper";

import cloneDeep from "lodash/cloneDeep";

const mergeSort = (size = 10) => {
  const array = generateRandomArray(size);

  // Initialize steps, which will keep track of array element positions at each cycle
  const steps = [cloneDeep(array)];

  const mergeSortReal = array => {
    //if the array length is less than 2, return, which will in the future invoke the merger method
    if (array.length < 2) return array;

    //split the array in half
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    //recursively keep splitting the array in half until length of both left and right halves are less than two
    return merger(mergeSortReal(left), mergeSortReal(right));
  };

  const merger = (left, right) => {
    const array = [];
    let finalMerger = false;

    //mark finalMerger as true when on last merger step
    left.length + right.length === size && (finalMerger = true);

    while (left.length && right.length) {
      //keep track of left and right, relative to the array as a whole (prevStep)
      const prevStep = steps[steps.length - 1];
      const leftIndex = prevStep.findIndex(
        step => step.value === left[0].value
      );
      const rightIndex = prevStep.findIndex(
        step => step.value === right[0].value
      );

      addStep(
        [leftIndex, rightIndex],
        clearStatus(prevStep),
        steps,
        "checking"
      );

      if (left[0].value < right[0].value) {
        array.push(left.shift());
      } else {
        //this condition means we need to visualize insertion
        array.push(right.shift());
        let newStep = clearStatus(prevStep);
        const insert = newStep.splice(rightIndex, 1)[0];
        newStep.splice(leftIndex, 0, insert);

        //if we are on the final recursion, mark all element up to current insert as sorted
        if (finalMerger) {
          newStep.forEach(
            el => el.value <= insert.value && (el.isSorted = true)
          );
        }

        addStep([leftIndex], newStep, steps, "moving");
      }
    }

    return [...array, ...left, ...right];
  };

  mergeSortReal(array);

  //add final completion step
  steps.push(clearStatus(steps[steps.length - 1]));

  return steps;
};

export default mergeSort;
