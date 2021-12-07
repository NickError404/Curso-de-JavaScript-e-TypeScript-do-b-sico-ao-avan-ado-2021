// Declaração de função (function hoisting)
falaOi(msg='Teste');
function falaOi(msg) {
    console.log(`${msg}`);
}

// First-class objects (objetos de primeira classe)
// Function Expression
// Eu posso lidar com funções da mesma forma que com váriaveis
// Função com nome
// const souUmDado = function nomeDaFuncao() {
//     console.log('Sou um dado.');
// };
//Função sem nome
const souUmDado = function() {
    console.log('Sou um dado.');
};

// Eu posso executar uma função dentro
//da outra a partir do recebimento
function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo: ')
    funcao();
};
souUmDado();

// Arrow Function: é como a Function Expression só que menor
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
// Os : e function são opcionais, também pode ser feito assim
// falar() {código}

const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
}

obj.falar()