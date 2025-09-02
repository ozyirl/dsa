function productExceptSelf(nums: number[]): number[] {
  let res: number[] = [];
  let start = 1;

  for (let i = 0; i < nums.length; i++) {
    res.push(start);
    start *= nums[i];
  }

  let start2 = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= start2;
    console.log(`wrote res[${i}] = ${res[i]}`);
    start2 *= nums[i];
  }

  return res;
}

const numss = [1, 2, 3, 4];

console.log(productExceptSelf(numss));
