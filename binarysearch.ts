type returns = {
  index: number;
  exist: boolean;
};

function binarySearch(nums: number[], target: number): returns {
  let l = 0;
  let hi = nums.length;
  do {
    const m = Math.floor(l + (hi - l) / 2);
    const v = nums[m];
    if (v === target) {
      return { index: v, exist: true };
    } else if (v > target) {
      hi = m;
    } else {
      l = m + 1;
    }
  } while (l < hi);

  return { index: -1, exist: false };
}

function bSearch(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;

  do {
    const m = Math.floor(l + (r - l) / 2);
    const v = nums[m];

    if (v === target) {
      return v;
    } else if (v > target) {
      r = m;
    } else {
      l = m + 1;
    }
  } while (l < r);

  return -1;
}
