// My Answer

const canPlaceFlowersMine = (flowerbed: number[], n: number): boolean => {
  for (let i = 0; i < flowerbed.length && n > 0; i++) {
    if (flowerbed[i] === 0) {
      const emptyLeft: boolean = i === 0 || flowerbed[i - 1] === 0;
      const emptyRight: boolean =
        i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
      if (emptyLeft && emptyRight) {
        flowerbed[i] = 1;
        n--;
      }
    }
  }
  return n <= 0;
};

// npm run solve src/problems/CanPlaceFlowers.ts

// Best Answer
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (n === 0) {
    return true;
  }

  let slots = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) {
      continue;
    }
    const canPlotBefore = i === 0 || flowerbed[i - 1] === 0;
    const canPlotAfter = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

    if (canPlotBefore && canPlotAfter) {
      flowerbed[i] = 1;
      slots++;
      if (slots >= n) {
        return true;
      }
    }
  }

  return false;
}
