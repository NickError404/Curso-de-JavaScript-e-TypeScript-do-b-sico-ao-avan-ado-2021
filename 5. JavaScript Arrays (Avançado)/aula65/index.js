// Filter -> Sempre retornar um array, com a mesma quantidade de elementos
// ou elementos.

// Retorne os números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Filter
// function callbackFilter(valor, indice, array) {
//     if (valor > 10) {return true} else {return false}
// 

const numerosFiltrados = numeros.filter((valor, indice, array) => {
    // console.log(valor, indice);
    return valor > 10;
});
// console.log(numerosFiltrados);



/**
 * Retorne as pessoas que tem o nome com 5 letras ou mais
 * Retorne as pessoas com mais de 50 anos
 * Retone as pessoas cujo o nome termina com a
 */
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leiticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
// const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
// console.log(pessoasComNomeGrande);
const pessoasComMaidDe50 = pessoas.filter(idade => idade.idade > 50);
// console.log(pessoasComMaidDe50);
const nomeTerminaComA = pessoas.filter(function(obj) {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(nomeTerminaComA);