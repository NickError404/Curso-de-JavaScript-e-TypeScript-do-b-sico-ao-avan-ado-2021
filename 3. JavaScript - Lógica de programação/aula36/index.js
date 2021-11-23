// const frutas = ['Pera', 'Maçã', 'Uva'];
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// For in -> lê os índices ou chaves do objeto

// for (let i in frutas) {
//     console.log(frutas[i]);
// }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
}

// console.log(pessoa.nome);
// console.log(pessoa['pessoa']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}