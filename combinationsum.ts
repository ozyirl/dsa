function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  function dfs(i: number, curr: number[], total: number): void {
    if (total === target) {
      result.push([...curr]);
      return;
    }

    if (i >= candidates.length || total > target) {
      return;
    }

    curr.push(candidates[i]);
    dfs(i, curr, total + candidates[i]);
    curr.pop();

    dfs(i + 1, curr, total);
  }

  dfs(0, [], 0);
  return result;
}

const candidates = [2, 3, 6, 7];
const target = 7;
console.log(combinationSum(candidates, target));
