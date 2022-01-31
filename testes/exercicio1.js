/**
 * 1) Dado o array numerosDasCasas = [5,10,20,23,34], escreva o comando que retorna o array somente com os números pares;
 
const ehPar = (n) =>{
	if(n % 2 == 0){
		return true;
	}else{
		return false;
	}
}*/

const numerosDasCasas = [5,10,20,23,34] 
const ehPar = n => n % 2 == 0;
const casasPares = numerosDasCasas.filter(ehPar)
console.log(casasPares);





/*

2) Dado o array saldos = [10,100,22,25,34], escreva o comando que retorna o array somente com os múltiplos de 5;
3) Dado o array nomes = ["Mateus", "Rhuan", "Ryee", "Gustavo"], escreva o comando que retorna um array somente com nomes com mais de 5 caracteres.
4) Dado o array pessoas = [
				{
					nome:"Natália",
					salario: 15000
				},
				{
					nome:"Sérgio Moura",
					salario: 13000
				},
				{
					nome:"Silvia",
					salario: 10000
				},
				{
					nome:"João",
					salario: 8000
				}
			]
escreva o comando que retorna todas pessoas com salário maior que 8000.
 */