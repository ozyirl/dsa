function twoSum2(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) return [left, right];

    if (sum < target) left++;
    else right--;
  }

  return [-1, -1];
}

const nums2 = [2, 3, 4];

const target = 6;

console.log(twoSum2(nums2, target));
