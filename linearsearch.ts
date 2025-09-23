const nums = [3, 4, 5, 6, 2, 8, 3];
const target = 2;

type returns = {
  index: number;
  exist: boolean;
};

function linearSearch(nums: number[], target: number): returns {
  let result = 0;
  let yes = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result = i;
      yes = true;
    }
  }

  return { index: result, exist: yes };
}

console.log(linearSearch(nums, target));
