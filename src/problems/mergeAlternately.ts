// My Answer

const mergeAlternatelyMine = (word1: string, word2: string): string => {
  const word1Chars = word1.split("")
  const word2Chars = word2.split("")

  let mergedWord = ""
  for (let i = 0; i < word1Chars.length || i < word2Chars.length; i++) {
      if (i < word1Chars.length) mergedWord += word1Chars[i]
    if (i < word2Chars.length) mergedWord += word2Chars[i]
  }
  return mergedWord;
};

console.log(mergeAlternatelyMine("abc", "pqr"))

// Best Answer

function mergeAlternately(word1: string, word2: string): string {
  let merged = ''
  let length = Math.min(word1.length, word2.length)

  for (let i = 0; i < length; i++) {
      merged += word1[i] + word2[i]
  }

  return merged + word1.slice(length) + word2.slice(length)
};

console.log(mergeAlternately("abc", "pqr"))
