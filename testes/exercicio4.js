/**4) Dados o array pessoas = [
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
escreva o comando que retorna todas pessoas com salário maior que 8000. */


const pessoas = [
    {
        nome: "Natália",
        salario: 15000
    },
    {
        nome: "Sérgio Moura",
        salario: 13000
    },
    {
        nome: "Silvia",
        salario: 10000
    },
    {
        nome: "João",
        salario: 8000
    }
];

let salarioMaiorQueOitomil = pessoas.filter(pessoa => pessoa.salario > 8000);
salarioMaiorQueOitomil.forEach(pessoa => { 
    console.log(pessoa);
});

// console.log(pessoas.filter(s => s.salario > 8000));
