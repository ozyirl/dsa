function missingNumber(nums: number[]): number {
  let n = nums.length;
  let expected = (n * (n + 1)) / 2;
  let actual = nums.reduce((a, b) => a + b, 0);

  return expected - actual;
}

const nums = [0, 1, 3];
console.log(missingNumber(nums));
