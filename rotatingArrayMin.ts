function findmin(nums: number[]): number {
  let left = 0; // left pointer at the start of array
  let right = nums.length - 1; // righ at end

  while (left < right) {
    let mid = Math.floor((right + left) / 2); // mid pointer

    if (nums[right] < nums[mid]) {
      // if right is less shift left to mid
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
}

const nums2 = [3, 4, 5, 1, 2];

console.log(findmin(nums2));
