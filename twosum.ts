const nums = [2, 7, 11, 15];

const target = 9;
function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    const comp = target - x;

    if (seen.has(comp)) {
      return [seen.get(comp)!, i];
    }

    seen.set(x, i);
  }

  return [-1, -1];
}

console.log(twoSum(nums, target));
