const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const array2 = [-5, 2, 3, -1, 7, -6, 4];

function maxSubArray(nums: number[]): number {
  let c = nums[0];
  let b = nums[0];

  for (let i = 1; i < nums.length; i++) {
    c = Math.max(nums[i], c + nums[i]);
    b = Math.max(b, c);
  }
  return b;
}

console.log(maxSubArray(array));
console.log(maxSubArray(array2));
