// status: idle, checking, moving, sorted

import {
  generateRandomArray,
  addCheckOrSwapStep
} from "../util/algorithmHelper";

const quickSort = (size = 10) => {
  // const arr = generateRandomArray(size);
  const arr = [10, 7, 8, 9, 1, 2, 3, 4, 6, 5];
  const left = 0;
  const right = size - 1; // always pivot around the last element

  const swap = (arr, first, second) => {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  };

  const partition = (arr, left, right) => {
    let pivot = arr[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }
      while (arr[j] > pivot) {
        j--;
      }
      if (i <= j) {
        // [arr[i], arr[j]] = [arr[j], arr[i]];
        swap(arr, i, j);
        i++;
        j--;
      }
    }
    return i;
  };

  const quickSortReal = (arr, left, right) => {
    if (arr.length > 1) {
      let index = partition(arr, left, right);

      if (left < index - 1) {
        quickSortReal(arr, left, index - 1);
      }

      if (index < right) {
        quickSortReal(arr, index, right);
      }
    }
    console.log(arr);
    return arr;
  };

  return quickSortReal(arr, left, right);
};

// Below is my first attempt based
// const quickSort = (size = 10) => {
//   // const arr = generateRandomArray(size);
//   const arr = [10, 7, 8, 9, 1, 5];
//   const left = 0;
//   const right = size - 1; // always pivot around the last element

//   const partition = (arr, left, right) => {
//     const i = left - 1; // index of smaller element, effectively starts at 0
//     const pivot = arr[right]; // we will pivot around the last element

//     for (j = 0; j < pivot; j++) {
//       if (arr[j] < pivot) {
//         i++;
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//     [arr[i + 1], arr[pivot]] = [arr[pivot], arr[i + 1]];
//     console.log(arr);
//     return i + 1;
//   };

//   const quickSortReal = (arr, left, right) => {
//     if (left < right) {
//       const partitionIndex = partition(arr, left, right);
//       quickSortReal(arr, left, partitionIndex - 1);
//       quickSortReal(arr, partitionIndex + 1, right);
//     }
//   };

//   return quickSortReal(arr, left, right);
// };

export default quickSort;
