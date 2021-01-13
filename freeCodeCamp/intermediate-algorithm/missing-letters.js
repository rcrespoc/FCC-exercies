/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
  const letra = str
    .split("")
    .find(
      (a, i, arr) =>
        arr[i + 1] !== undefined &&
        arr[i + 1].charCodeAt(0) - a.charCodeAt(0) > 1
    );
    
  return letra === undefined
    ? undefined
    : String.fromCharCode(letra.charCodeAt(0) + 1);
}