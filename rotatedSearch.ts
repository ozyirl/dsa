function findTarget(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // Left half is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // target is in the left half
      } else {
        left = mid + 1; // target is in the right half
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // target is in the right half
      } else {
        right = mid - 1; // target is in the left half
      }
    }
  }

  return -1;
}

const nums2 = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
console.log(findTarget(nums2, target));
