const bubbleSort = (size = 10) => {
  // If the request is to sort one element, just return the element
  if (size <= 1) return [1];

  // Build an array of a given size; this array will mutate
  const arr = [];
  for (let i = 1; i < size + 1; i++) {
    arr.push(i);
  }

  // Shuffle the built array using Dursetenfeld method
  // Alternatively, could use _.js library's .shuffle() method
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

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
