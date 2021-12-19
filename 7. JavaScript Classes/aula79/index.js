// Getters e Setters
const _velocidade = Symbol('velocidade');
// O Symbol nunca é igual a outro

//getter é quando é solicitado uma informação da função ou classe
// setter é quando é definido um valor a alguma parte da estrutura claasse ou função

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    // define o valor
    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    //retorna o valor
    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

// for(let i = 0; i <= 200; i++) {
//     c1.acelerar();
// }

c1.velocidade = 99;
console.log(c1.velocidade);