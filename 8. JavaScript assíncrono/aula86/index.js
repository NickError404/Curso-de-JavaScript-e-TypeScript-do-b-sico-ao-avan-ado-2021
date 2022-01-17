/**
 * Promisses = a versão antiga da promisse seria o callback
 * on você passa o parametro de uma função dentro de outro que será
 * chamado.
 */

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('ERRO')); //Se esse condição de reject for atendida o bad value será acionado e todo o cod toma break

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2222, rand(1, 3));    // < Condição reject aqui, break code.
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 3', rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
    }).then(resposta => {
        console.log('Eu serei o último a se exibido/Executado');
    })
    .catch(e => {
        console.log('ERRO:', e);
    });


    console.log('Isso aqui será exibida antes de qualquer promisse');
