function sumOfTwoInts(a: number, b: number): number {
  while (b != 0) {
    let temp = (a & b) << 1;
    a = a ^ b;
    b = (a & b) << 1;
    b = temp;
  }
  return a;
}

console.log(sumOfTwoInts(1, 2));
