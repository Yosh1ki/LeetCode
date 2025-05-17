// Converting Array of numbers to all positive
// 配列の中の数字を全て正数にする関数
function convertArrayOfNumbersToAllPositive() {
  const mixed = [-5, 3, -2, 0, 7, -1];

  // (A) using Math.abs directly
  const allPositive1 = mixed.map(Math.abs);
  // → [5, 3, 2, 0, 7, 1]

  // (B) with an explicit callback
  const allPositive2 = mixed.map((n) => (n < 0 ? -n : n));
  // → [5, 3, 2, 0, 7, 1]
}

// Sorting an Array in ascending order
// 配列の中の数字を昇順に並べる
function sortingAnArrayInAscendingOrder() {
  const nums = [10, 3, 21, 2];

  // Ascending numeric sort:
  nums.sort((a, b) => a - b);
  console.log(nums); // → [2, 3, 10, 21]

  //if descending
  nums.sort((a, b) => b - a);
  console.log(nums); // → [21, 10, 3, 2]
}


