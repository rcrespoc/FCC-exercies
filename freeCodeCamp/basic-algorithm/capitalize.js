/* Return the provided string with the first 
letter of each word capitalized. Make sure the 
rest of the word is in lower case.

For the purpose of this exercise, you should also 
capitalize connecting words like "the" and "of". */

const titleCase = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((a) => a[0].toUpperCase() + a.slice(1))
    .join(" ");
