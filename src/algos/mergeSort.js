const mergeSort = (size = 10) => {
  // Build an array of a given size; this array will mutate
  const arr = [];
  for (let i = 1; i < size + 1; i++) {
    arr.push(i);
  }

  // If the request is to sort one element, just return the element
  if (size <= 1) return arr;

  // Shuffle the built array using Dursetenfeld method
  // Alternatively, could use _.js library's .shuffle() method
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // Initialize steps, which will keep track of array element positions at each cycle
  const steps = [[...arr]];

  const mergeSortReal = (array, half = array.length / 2) => {
    if (array.length < 2) return array;

    const left = array.splice(0, half);

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

  mergeSortReal(arr);
  console.log(steps);
  console.log(steps.length);
  return steps;
};

export default mergeSort;
