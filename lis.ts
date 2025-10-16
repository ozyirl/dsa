function lengthOfLis(nums: number[]): number {
  if (nums.length === 0) return 0;
  const tails: number[] = [];

  for (const x of nums) {
    let lo = 0,
      hi = nums.length;

    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (tails[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    tails[lo] = x;
  }
  return tails.length;
}

function Lis(nums: number[]): number {
  if (nums.length === 0) return 0;

  const tails: number[] = [];

  for (const x of nums) {
    let lo = 0,
      hi = nums.length;

    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      console.log(
        `x=${x}, lo=${lo}, hi=${hi}, mid=${mid}, tails[mid]=${tails[mid]}`
      );
      if (tails[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    tails[lo] = x;
    console.log(`placed x=${x} at ${lo} -> tails=[${tails.join(", ")}]`);
  }

  return tails.length;
}

console.log(Lis([0, 1, 0, 3, 2, 3]));
