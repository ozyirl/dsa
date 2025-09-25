// type result = {
//   ballone?: number;
//   balltwo?: number;
// };

// function FindBreak(
//   heights: number[],
//   target1: number,
//   target2: number
// ): result {
//   let l1 = 0;
//   let l2 = 0;
//   let r1 = heights.length - 1;
//   let r2 = heights.length - 1;

//   do {
//     const m1 = Math.floor(l1 + (r1 - l1) / 2);
//     const v1 = heights[m1];
//     const m2 = Math.floor(l2 + (r2 - l2) / 2);
//     const v2 = heights[m2];
//     if (v1 === target1 && v2 === target2) {
//       return { ballone: v1, balltwo: v2 };
//     } else if (v1 === target1 && v2 != target2) {
//       return { ballone: v1 };
//     } else if (v2 === target2 && v1 != target1) {
//       return { balltwo: v2 };
//     }
//   } while (l1 < r1 && l2 < r2);

//   return { ballone: -1, balltwo: -1 };
// }

function twoCrystalBalls(breaks: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jmpAmount;

  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) break;
  }

  i -= jmpAmount;

  for (let j = 0; j <= jmpAmount && i < breaks.length; j++, i++) {
    if (breaks[i]) return i;
  }

  return -1;
}

const floors = [false, false, false, false, true, true, true, true];

console.log(twoCrystalBalls(floors));
