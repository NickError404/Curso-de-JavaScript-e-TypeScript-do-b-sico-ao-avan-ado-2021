// // function
// // const pessoa = {
// //     nome: 'Luiz',
// //     sobrenome: 'Otávio'
// // };
// // const chave = pessoa.nome;
// // console.log(pessoa['nome']);
// // console.log(pessoa['sobrenome']);

// // const pessoa1 = new Object();
// // pessoa1.nome = 'Luiz';
// // pessoa1.sobrenome = 'Otávio';
// // pessoa1.idade = 30;
// // pessoa1.falarNome = function() {
// //     return (`${this.nome} está falando o seu nome.`)
// // };
// // pessoa1.getDataNascimento = function() {
// //     const dataAtual = new Date();
// //     return dataAtual.getFullYear() - this.idade;
// // };

// // for (let chave in pessoa1) {
// //     console.log(pessoa1[chave]);
// // };

// // Factory functions / Constructor functions / Classes

// // function criaPessoa(nome, sobrenome) {
// //     return {
// //         nome,
// //         sobrenome,
// //         get nomeCompleto() {
// //             return `${this.nome} ${this.sobrenome}`
// //         }
// //     };
// // }

// // const p1 = criaPessoa('Luiz', 'Otávio');
// // console.log(p1.nomeCompleto)

// function Pessoa(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
    
// }

// // {} <- this -> this
// // p1.ENDERECOMEMORIA = {nome: 'Outra coisa'}
// // p1 = (Endereço de memória) -> 'Valor'

// const p1 = new Pessoa('Luiz', 'Miranda');
// // Object.freeze(p1); impede que todos os valores de p1 sejam atualizado.
// p1.nome = 'Outra coisa';
// p1.sobrenome = 'QLQ';
// p1.fala = function() {console.log('Oi')}
// p1.fala();
// const p2 = new Pessoa('Maria', 'Miranda');
