// Clousures
// Global
// Clousure é a capacidade de uma função de pegar os dados dentro do seu escopo lexical de forma isolada

function retornaFuncao(nome) {
    return function () {
        return nome;
    };
};

// aqui a funcao tá recebendo o conteúdo da retornafuncao

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('Otávio')

console.log(funcao(), funcao2());