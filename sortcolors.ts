function sortColors(nums: number[]): void {
  let lo = 0;
  let mid = 0;
  let hi = nums.length - 1;

  while (mid <= hi) {
    if (nums[mid] === 0) {
      let tmp = nums[lo];
      nums[lo] = nums[mid];
      nums[mid] = tmp;
      lo++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      let tmp = nums[mid];
      nums[mid] = nums[hi];
      nums[hi] = tmp;

      hi--;
    }
  }
}
