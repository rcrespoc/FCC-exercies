/* A prime number is a whole number greater than 1 with 
exactly two divisors: 1 and itself. For example, 2 is a 
prime number because it is only divisible by 1 and 2. In 
contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers 
that are less than or equal to num. */

function sumPrimes(num) {
  let total = 0;
  for (let i = num; i >= 2; i--) {
    let j = 1;
    let cont = 0;
    while (cont < 3) {
      if (i % j === 0) cont++;
      if (j > i) break;
      j++;
    }
    if (cont === 2) total += i;
  }
  return total;
}