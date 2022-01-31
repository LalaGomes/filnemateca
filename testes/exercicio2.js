/*

2) Dado o array saldos = [10,100,22,25,34], escreva o comando que retorna o array somente com os múltiplos de 5;
*/

const saldos = [10,100,22,25,34]
const multiploDeCinco = n => n % 5 == 0;
console.log(saldos.filter(multiploDeCinco))
