function CountBits(n: number): number[] {
  let ans = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    ans[i] = ans[Math.floor(i / 2)] + (i % 2);
  }
  return ans;
}

const n = 5;
console.log(CountBits(n));
