/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key. */

function checkCashRegister(price, cash, cid) {
  // Inicializar change con insuf y array vacio.
  // index = Para recorrer array arr de billetes.
  // variable vuelto que será la que nos indique cuánto queda
  var change = { status: "INSUFFICIENT_FUNDS", change: [] },
    index = cid.length - 1,
    vuelto = cash - price;
  // Con este arr2 se salva el estado inicial de la caja antes de comenzar a evaluar.
  const arr2 = Array.from(cid);
  const arr = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE-HUNDRED", 100],
  ];
  // Evalúa si el total de lo que hay en caja es menor al vuelto, cuyo caso, retornamos el objeto inicializado (change);
  let total = cid.reduce((a, b) => b[1] + a, 0);
  if (total < vuelto) return change;
  // Mapea el array cid para actualizar los saldos de caja.
  cid = cid.reverse().map((el) => {
    // Cantidad de billetes
    let cantidad = 0;
    // variable para manejar más fácilmente la moneda en la que estamos evaluando.
    const moneda = arr[index][1];
    // Se actualiza el vuelto a dos decimales porque JS tiene problemas con los decimales.
    vuelto = Number(vuelto).toFixed(2);
    // Evalúa que el vuelto sea igual o mayor. Cuyo caso, se puede usar dicho billete para entregar vuelto.
    if (vuelto >= moneda) {
      cantidad = Math.floor(vuelto / moneda);
      // Evalúa si la cantidad de billetes de dicha moneda es menor o igual a lo que existe en caja, en cuyo caso se entregará. De lo contrario, se entregará el límite que haya en caja.
      // Posteriormente, se actualiza el saldo de caja.
      if (cantidad * moneda <= el[1]) {
        change.change.push([arr[index][0], cantidad * moneda]);
        change.status = "OPEN";
        vuelto -= cantidad * moneda;
        let resto = el[1] - cantidad * moneda;
        index--;
        return [el[0], resto];
      } else {
        //Si se toma todo el restante de esa moneda existente en caja, se actualiza el saldo de caja a 0
        cantidad = Math.floor(el[1] / moneda);
        change.change.push([arr[index][0], el[1]]);
        change.status = "OPEN";
        vuelto -= el[1];
        index--;
        return [el[0], 0];
      }
    }
    // Se actualiza el indice en todos los casos, y si la moneda que está siendo evaluada, es superior a lo que hay que entregar en vuelto, pues se itera a la siguiente.
    index--;
    return el;
  });
  // Se evalua que lo restante de caja sea igual a cero. En cuyo caso, se cierra la caja y se actualiza el change del objeto, con lo que habia originalmente en caja, es decir, con arr2 (que se creó al inicio).
  let restante = cid.reduce((a, b) => b[1] + a, 0);
  if (restante === 0) {
    change.status = "CLOSED";
    change.change = arr2;
  }
  // Se evalua que el vuelto sea igual a 0, porque si queda más vuelto que entregar, quiere decir que no había suficientes fondos. Por lo que se actualizará el objeto change.
  return !(vuelto > 0) ? change : { status: "INSUFFICIENT_FUNDS", change: [] };
}
