/* Return the length of the longest word in the provided sentence.

Your response should be a number. */

const findLongestWordLength = (str) =>
  str
    .split(" ")
    .sort((a, b) => a.length - b.length)
    .reverse()[0].length;
