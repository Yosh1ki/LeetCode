/**
 * LeetCode問題サンプル
 * 問題: 2つの数値の合計を返す
 */

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}

// テストケース
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);

console.log(`入力: nums = [${nums}], target = ${target}`);
console.log(`出力: [${result}]`);
