/**
 * Funções geradoras, ela tem a capacidade de parar no meio do processo, entregar apenas parte de uma tarefa, por decisão
 * toda vez que a função geradora é chamada ela retorna o primeiro valor e depois o segundo e sucessivamente
 * após a última chamada da função, e sem mais retornos do yield, é notificado que não à mais dados a ser passados
 * os valores são retornados atráves do yield
 * os valores da função só podem ser extraídos atráves da função dos geradores next()
 * também podemos chamar todos os dados da função com um laço for, pois ele sabe quando é o final dos dados
 * As chamadas são contadas a partir de quantas vezes que a função foi solicitada em ordem respectiva do código, exemplos abaixo.
 */


// exemplo 1
function* geradora1() {
    // Any Code...
    yield 'Valor 1';
    // Any Code...
    yield 'Valor 2';
    // Any Code...
    yield 'Valor 3';
}
// const g1 = geradora1();
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next().value)


// exemplo 2
function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

// const g2 = geradora2();
// console.log(g2.next().value);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
// for(let valor of g4) {
//     console.log(valor);
// }

function* geradora5() {
    yield function() {
        console.log('vim do y1');
    };

    yield function() {
        console.log('Vim do return')
    };

    yield function() {
        console.log('Vim do y2');
    };
};

const g5 = geradora5();
const funct1 = g5.next().value; // Primeiro chamado
const funct2 = g5.next().value; // Segundo chamado
const funct3 = g5.next().value; // Segundo chamado

funct1();
funct2();
funct3();
