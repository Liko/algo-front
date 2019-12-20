import { generateRandomArray } from "../util/algorithmHelper";

const mergeSort = (size = 10) => {
  const array = generateRandomArray(size);

  // Initialize steps, which will keep track of array element positions at each cycle
  const steps = [[...array]];

  const mergeSortReal = (array, half = array.length / 2) => {
    //if the array length is less than 2, return, which will in the future invoke the merger method
    if (array.length < 2) return array;

    //split the array in half
    const left = array.splice(0, half);

    //recursively keep splitting the array in half until length of both left and right halves are less than two
    return merger(mergeSortReal(left), mergeSortReal(array));
  };

  const merger = (left, right) => {
    const array = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        array.push(left.shift());
      } else {
        array.push(right.shift());
      }
      if ([...array, ...left, ...right].length === size)
        steps.push([...array, ...left, ...right]);
    }

    return [...array, ...left, ...right];
  };

  mergeSortReal(array);
  return steps;
};

export default mergeSort;
