// My Answer

// find greatestcommondivisor
const gcd = (x: number, y: number): number => (x % y ? gcd(y, x % y) : y);
// console.log(gcd(480, 1024)); //32

const gcdOfStringsMine = (str1: string, str2: string) => {
  const g: number = gcd(str1.length, str2.length);
  const candidate = str1.slice(0, g);
  if (
    candidate.repeat(str1.length / g) === str1 &&
    candidate.repeat(str2.length / g) === str2
  ) {
    return candidate;
  }

  return "";
};
console.log(gcdOfStrings("ABC", "ABCABC")); // "ABC"

// npm run solve src/problems/GreatestCommonDivisor.ts



// Best Answer

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
  }
  let rs = gcd(str1.length, str2.length);
  return str1.slice(0, rs);
}
