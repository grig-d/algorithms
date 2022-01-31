export default function Quicksort(inputArray) {
  if (inputArray.length <= 1) {
    return inputArray;
  } else {
    const leftArray = [];
    const rightArray = [];
    const pivot = inputArray[0];

    inputArray.slice(1).forEach(element => {
      if (element > pivot) {
        rightArray.push(element);
      } else {
        leftArray.push(element);
      }
    });

    return [...Quicksort(leftArray), pivot, ...Quicksort(rightArray)];
  }
}
