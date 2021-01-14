/* Find the smallest common multiple of the provided parameters 
that can be evenly divided by both, as well as by all sequential 
numbers in the range between these parameters.

The range will be an array of two numbers that will not 
necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common 
multiple of both 1 and 3 that is also evenly divisible by 
all numbers between 1 and 3. The answer here would be 6. */

function smallestCommons(arr) {

  // We need to sort the array.
  arr.sort((a, b) => a - b);

  // Three aux arrays.
  const primos = [];
  let numeros = [];
  const resultado = [];

  // We need to find which numbers are primes.
  for (let i = 2; i <= arr[1]; i++) {
    let j = 1;
    let cont = 0;

    // Here we can find these numbers.
    while (j <= i) {
      if (i % j === 0) cont++;
      if (cont > 2) j = i;
      j++;
    }

    // If it is, we push into the array.
    if (cont === 2) primos.push(i);

    // If i is between the range of the given array
    // we need to push it into the number array.
    if (i >= arr[0] && i <= arr[1]) numeros.push(i);
  }

  // Here we calculate the operations.
  for (let i = 0; i < primos.length; i++) {
    let cont = 0;
    for (let j = 0; j < numeros.length; j++) {
      if (numeros[j] !== 1 && numeros[j] % primos[i] === 0) {
        cont++;
        numeros[j] /= primos[i];
      }
    }

    // If the prime was used, we need to push it into
    // the array and decrease i by 1 to make all the calcs again.
    if (cont > 0) resultado.push(primos[i--]);
  }

  // Se calcula la múltiplicación final
  return resultado.reduce((a, b) => a * b);
}