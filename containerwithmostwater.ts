function maxArea(height: number[]): number {
  let res = 0,
    left = 0,
    right = height.length - 1;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    res = Math.max(res, h * (right - left));

    if (height[left] < height[right]) left++;
    else right--;
  }
  return res;
}

const nums = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(nums));
