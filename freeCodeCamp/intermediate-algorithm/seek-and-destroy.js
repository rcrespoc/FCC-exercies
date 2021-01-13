/* You will be provided with an initial array 
(the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements 
from the initial array that are of the same value as 
hese arguments. */

function destroyer(arr) {
  const nums = Array.from(arguments).slice(1);
  return arr.filter((a) => !nums.includes(a));
}

// OR 

function destroyer(arr) {
  return arr.filter((a) => !Array.from(arguments).slice(1).includes(a));
}

// OR

/* We don't have the object 'arguments' while we are using arrow functions, 
that's why we have to include another parameter called 'nums' with spread 
operator. */

const destroyer = (arr, ...nums) => arr.filter((a) => !nums.includes(a));