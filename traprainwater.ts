function trap(height: number[]): number {
  let lo = 0;
  let hi = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (lo < hi) {
    if (height[lo] <= height[hi]) {
      if (height[lo] >= leftMax) {
        leftMax = height[lo];
      } else {
        water += leftMax - height[lo];
      }
      lo++;
    } else {
      if (height[hi] >= rightMax) {
        rightMax = height[hi];
      } else {
        water += rightMax - height[hi];
      }
      hi--;
    }
  }

  return water;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
