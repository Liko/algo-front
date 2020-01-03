import {
  generateRandomArray,
  addStep,
  clearStatus
} from "../util/algorithmHelper";

import cloneDeep from "lodash/cloneDeep";

const quickSort = (size = 10) => {
  const array = generateRandomArray(size);
  const steps = [cloneDeep(array)];
  const left = 0;
  const right = size - 1;

  const prevStep = () => steps[steps.length - 1];

  // Quick sorts work by recursively picking a pivot in an array, evaluating all elements before/after the pivot against the value of the element at the pivot, and swapping elements around such that all elements before the pivot are less than the value of the pivot and all elements after the pivot are greater in value.
  const partition = (array, left, right) => {
    let pivotPosition = Math.floor((right + left) / 2);
    let pivot = array[pivotPosition];
    let i = left;
    let j = right;

    // We want to update the input array with the isSorted properties of the previous step
    array.forEach((el, idx) => (el.isSorted = prevStep()[idx].isSorted));

    // Because our pivot is in the middle, all elements have been evaluated when the left/right cross over.
    while (i <= j) {
      // Evaluate elements left of the pivot until one is found with a higher value than the pivot
      while (array[i].value < pivot.value) {
        // Set the status of the current left/right pointers to 'checking', all other elements to 'idle'
        addStep([i, pivotPosition], clearStatus(prevStep()), steps, "checking");
        i++;
      }

      addStep([i, pivotPosition], clearStatus(prevStep()), steps, "checking");

      // Check the same for elements right of the pivot
      while (array[j].value > pivot.value) {
        // Set the status of the current left/right pointers to 'checking', all other elements to 'idle'
        addStep([j, pivotPosition], clearStatus(prevStep()), steps, "checking");
        j--;
      }

      addStep([j, pivotPosition], clearStatus(prevStep()), steps, "checking");

      // If elements that need to be swapped were found, swap them
      if (i <= j) {
        // Swap elements, store the new positions to step, then move the i/j pointers
        if (i !== j) {
          [array[i], array[j]] = [array[j], array[i]];
          addStep([i, j], array, steps, "moving");
        }
        i++;
        j--;
      }
    }
    return i; // This determines the next element the sort will pivot around
  };

  // Recursively pick and evaluate all elements around a partition, until the elements are sorted.
  const quickSortReal = (array, left, right) => {
    if (array.length > 1) {
      let index = partition(array, left, right);

      // If the left pointer is less than the index, then there are still elements to the left of the index which needs to be swapped, so the quick sort is called recursively until the elements left of the index are sorted
      if (left < index - 1) {
        quickSortReal(array, left, index - 1);
      } else {
        // Else partition is sorted
        prevStep().forEach((el, idx) => idx < index && (el.isSorted = true));
      }

      // Same goes for the elements to the right of the index
      if (index < right) {
        quickSortReal(array, index, right);
      } else {
        // Else partition is sorted
        prevStep().forEach((el, idx) => idx < index && (el.isSorted = true));
      }
    }
    return array;
  };

  quickSortReal(array, left, right);

  // Add a final completion step
  steps.push(clearStatus(steps[steps.length - 1]));
  return steps;
};

export default quickSort;
