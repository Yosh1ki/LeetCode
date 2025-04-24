// My Answer

const isSubsequenceMine = (s: string, t: string): boolean => {
  const sChars = s.split("");
  const tChars = t.split("");
  let j = 0;
  if (s.length > t.length) return false;
  for (let i = 0; i < t.length; i++) {
    if (sChars[j] === tChars[i]) {
      j++;
      if (j === sChars.length) break;
    }
  }
  return j === sChars.length;
};

//best answer

function isSubsequence(s: string, t: string): boolean {
  let sPointer = 0;
  let tPointer = 0;

  while(sPointer < s.length && tPointer < t.length) {
      if(s[sPointer] === t[tPointer]) {
          sPointer++;
      }

      tPointer++;
  }

  return sPointer === s.length
};