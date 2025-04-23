// My Answer

const kidsWithCandiesMine = (candies: number[], extraCandies: number) => {
  const max = Math.max(...candies);
  const result: boolean[] = [];
  for (const candy of candies) {
    result.push(candy + extraCandies >= max);
  }
  return result;
};

// npm run solve src/problems/KidsWithTheGreatestNumberOfCandies.ts

// Best Answer

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let result: boolean[] = [];
  let max = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    let childWithExtraCandie: number = 0;
    childWithExtraCandie = candies[i] + extraCandies;
    if (childWithExtraCandie >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}
kidsWithCandies([4, 2, 1, 1, 2], 1);
