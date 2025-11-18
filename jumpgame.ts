function canJump(nums: number[]): boolean {
  let maxjump = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxjump) {
      return false;
    }

    maxjump = Math.max(maxjump, i + nums[i]);
  }

  return maxjump >= nums.length - 1;
}
