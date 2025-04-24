// my answer

const largestAltitude = (gain: number[]): number => {
  let current = 0;
  let best = 0;
  for (let i = 0; i < gain.length; i++) {
    current += gain[i];
    if (best < current) best = current;
  }
  return best;
};
