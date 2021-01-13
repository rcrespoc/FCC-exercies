/* Truncate a string (first argument) if it is 
longer than the given maximum string length 
(second argument). Return the truncated string 
with a ... ending. */

const truncateString = (str, num) =>
  num >= str.length ? str : str.slice(0, num) + "...";