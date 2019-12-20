import { generateRandomArray } from "../util/algorithmHelper";

const bubbleSort = (size = 10) => {
  const arr = generateRandomArray(size);

  // Initialize steps, which will keep track of array element positions at each cycle
  const steps = [[...arr]];

  // Finally, perform a bubble sort on the shuffled array
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // swap elements so that the greater of the two 'moves' towards the end of the array
        let step = [...arr]; // because array is mutating, we need a snapshot of it
        steps.push(step);
        swap = true;
      }
    }
  }
  return steps;
};

export default bubbleSort;
