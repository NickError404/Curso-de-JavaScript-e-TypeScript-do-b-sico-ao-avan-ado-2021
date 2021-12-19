// function criapessoa(nome, sobrenome) {
//     const pessoaPrototype = {
//             falar() {
//                 console.log(`${this.nome} está falando`)
//             },

//             comer() {
//                 console.log(`${this.nome} está comendo`)
//             },

//             beber() {
//                 console.log(`${this.nome} está bebendo`)
//             },
//         };

//         return Object.create(pessoaPrototype, {
//             nome: { value: nome },
//             sobrenome: { value: sobrenome }
//         });
// };

// const p1 = criapessoa('Luiz', 'Otávio');
// const p2 = criapessoa('Maria', 'Luiza');
// console.log(p1);
// console.log(p2);




// Composição mixing
const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    },
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype), {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'Luiza');
console.log(p1);
console.log(p2);
