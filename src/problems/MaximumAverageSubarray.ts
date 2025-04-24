// My answer

const findMaxAverage = (nums: number[], k: number): number => {
  let currentSum = nums.slice(0, k).reduce((sum, value) => sum + value, 0);
  let maxSum = currentSum;
  for (let i = 0; i < nums.length - k; i++) {
    currentSum = currentSum - nums[i] + nums[i + k];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  const average = maxSum / k

  return average
};
