function threeSum(nums: number[], target: number): number[][] {
  let res: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) left++;

        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
}

const nums = [-1, 0, 1, 2, -1, -4];
const target2 = 0;

console.log(threeSum(nums, target2));
