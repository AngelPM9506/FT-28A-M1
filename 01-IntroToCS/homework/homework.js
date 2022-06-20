'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let decimal = 0;
  for (let i = 0; i < num.length; i++) {
    decimal += num[i] * Math.pow(2, (num.length - 1 - i));
  }
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let numero = num;
  let valores = [];
  let binario = '';
  while (numero !== 0) {
    let mitad = Math.floor(numero / 2);
    let valor = parseInt(numero % 2);
    numero = mitad;
    valores.push(valor);
  }
  for (let i = (valores.length - 1); i >= 0; i--) {
    binario += valores[i];
  }
  return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}