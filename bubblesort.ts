const nums = [4, 2, 5, 7, 8, 1, 0];
console.log(bubbleSort(nums));

function bubbleSort(nums: number[]): number[] {
  const arr = nums.slice();

  for (let i = 0; i < arr.length; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return arr;
}
