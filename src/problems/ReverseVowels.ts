// My Answer

const reverseVowelsMine = (s: string) => {
  const VOWELS = new Set(["a", "e", "i", "u", "o", "A", "E", "I", "U", "O"]);
  const chars: string[] = s.split("");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !VOWELS.has(chars[left])) {
      left++;
    }
    while (left < right && !VOWELS.has(chars[right])) {
      right--;
    }
    if (left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
  }
  return chars.join("");
};
