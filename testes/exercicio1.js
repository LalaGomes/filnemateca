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