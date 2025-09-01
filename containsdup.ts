const num = [1, 2, 3, 3, 5, 6, 7, 8, 9, 10];

function containsDup(nums: number[]): boolean {
  const seen = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    }

    seen.add(nums[i]);
  }

  return false;
}
console.log(containsDup(num));
