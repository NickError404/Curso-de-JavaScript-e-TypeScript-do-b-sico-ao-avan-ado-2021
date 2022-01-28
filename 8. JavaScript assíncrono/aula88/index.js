function rand(min = 0, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string'){ 
                reject('Caí NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// esperaAi('Fase 1', rand(11))
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand(1))
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', rand(1))
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })
//     .then(fase => {
//         console.log('Terminamos na fase:', fase);
//     })
//     .catch(e => console.log(e));
 
async function executa() { // Espera executar uma pra depois ir para a próxima
    try {
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1)
    
        setTimeout(function () {
            console.log('Essa promise estava pendente', fase1);
        }, 11000);

        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2)
    
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3)
    
        console.log('Terminamos na fase:', fase3)
    } catch (e) {
        console.log(e);
    }
}
// executa();

// const teste2 = esperaAi('qlq', 5000); // sem Await ou Then ela não pode temrinar e manda um tipo pending na tela
// console.log(teste2);

/**
 * Tipos de estados na Async Await
 * Pending -> pendente
 * Tá sendo executada e ainda não retornou o valor.
 * 
 * fullfilled -> resolvida
 * 
 * Reject -> rejeitada
 */

