// My Answer

function uniqueOccurrences(arr: number[]): boolean {
  const arr2 = arr.sort((a, b) => a - b);
  let index = 0;
  let count = 1;
  const countSet = new Set();
  for (let i = 1; i < arr2.length; i++) {
    if (arr2[index] === arr2[i]) {
      count++;
    } else if (arr2[index] !== arr2[i] && !countSet.has(count)) {
      countSet.add(count);
      index = i;
      count = 1;
    } else {
      return false;
    }
  }
  if (countSet.has(count)) return false;
  return true;
}
