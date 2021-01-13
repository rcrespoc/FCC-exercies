/* Compare two arrays and return a new array with any 
items only found in one of the two given arrays, but not 
both. In other words, return the symmetric difference of 
the two arrays.

Note
You can return the array with its elements in any order. */

function diffArray(arr1, arr2) {
  const arr3 = arr2.filter((a) => !arr1.includes(a));
  const arr4 = arr1.filter((a) => !arr2.includes(a));
  return arr3.concat(arr4);
}

// OR

const diffArray = (arr1, arr2) =>
  arr2
    .filter((a) => !arr1.includes(a))
    .concat(arr1.filter((a) => !arr2.includes(a)));