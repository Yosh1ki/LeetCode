//My Answer

const pivotIndex = (nums: number[]): number => {
  const total: number = nums.reduce((sum, x) => sum + x, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === total - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};
