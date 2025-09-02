function MaxSubarrayProd(nums: number[]): number {
  let min = nums[0];
  let max = nums[0];
  let best = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];

    const temp = Math.max(n, max * n, min * n);
    min = Math.min(n, min * n, max * n);

    max = temp;
    best = Math.max(best, max);
  }

  return best;
}

const nums2 = [2, 3, -2, 4];

console.log(MaxSubarrayProd(nums2));
