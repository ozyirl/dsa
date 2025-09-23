function ClimbingStairs(n: number): number {
  let one = 1;
  let two = 1;

  for (let i = 0; i < n - 1; i++) {
    const temp = one;
    one += two;
    two = one;
  }

  return one;
}

const n = 2;
console.log(ClimbingStairs(n));
