// My Answer

function findDifferenceMine(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const onlyIn1 = [];
  const onlyIn2 = [];
  for (let num of set1) {
    if (!set2.has(num)) {
      onlyIn1.push(num);
    }
  }

  for (let num of set2) {
    if (!set1.has(num)) {
      onlyIn2.push(num);
    }
  }

  return [onlyIn1, onlyIn2];
}

// Best Answer

const findDifference = (nums1: number[], nums2: number[]): number[][] => {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  return [
    Array.from(set1).filter((el) => !set2.has(el)),
    Array.from(set2).filter((el) => !set1.has(el)),
  ];
};
