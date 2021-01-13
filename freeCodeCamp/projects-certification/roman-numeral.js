/* Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {
  let romano = "";
  let letra = ["I", "V", "X", "L", "C", "D", "M"],
    valor = [1, 5, 10, 50, 100, 500, 1000];
  const romanos = (x, index) => {
    let cantidad = 0,
      letras = "";
    if (index < 0) return;
    cantidad = Math.floor(x / valor[index]);
    if (index % 2 !== 0) {
      let restante = valor[index + 1] - valor[index - 1];
      if (x >= restante && x < valor[index + 1]) {
        letras = letra[index - 1] + letra[index + 1];
        x -= restante;
        romano = romano.concat(letras);
        return romanos(x, index - 1);
      } else letras = letras.concat(letra[index].repeat(cantidad));
    } else {
      cantidad > 3
        ? (letras = letra[index] + letra[index + 1])
        : (letras = letras.concat(letra[index].repeat(cantidad)));
    }
    romano = romano.concat(letras);
    x -= cantidad * valor[index];
    return romano.concat(romanos(x, index - 1));
  };
  romanos(num, 6);
  return romano;
}
