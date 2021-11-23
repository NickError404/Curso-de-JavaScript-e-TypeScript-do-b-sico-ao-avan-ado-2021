const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereço: {
        rua: 'AV Brasil',
        numero: 320
    }
}
// console.log(pessoa.nome);

// atribuição via desestruturação



const { endereço: {rua: r = '1234', numero} } = pessoa;

console.log(r, numero);
