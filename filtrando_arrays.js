// Escreva uma funçâo que recebe um número como
// parâmetro e retorna true se o número for maior que 20
// e false caso contrario;

function maiorQueVinte(numero) {
    if (numero > 20) {
        return true
    }else{
        return false
    }
}


const temTrecho = (filme) => {
    if(filme.titulo.include(texto)){
        return true;
    } else {
        return false;
    }
}

//console.log(maiorQueVinte(30));


const numeros = [2, 6, 7, 10, 25, 17, 6, 18, 100, 20];
let filtrados = numeros.filter(maiorQueVinte);
console.log(filtrados);