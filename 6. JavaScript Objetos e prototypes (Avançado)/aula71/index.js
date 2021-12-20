// defineProperty
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: true // configurável
    });
};

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 6000000;
console.log(Object.keys(p1)); // printa as chaves da função




// DefineProperties

// function Produto(nome, preco, estoque) {

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, // mostra a chave
//         value: estoque, // valor
//         writable: true, // pode alterar
//         configurable: true // configurável
//     });

//     Object.defineProperties(this, {
//         nome: {
//             enumerable: true, // mostra a chave
//             value: estoque, // valor
//             writable: true, // pode alterar
//             configurable: true // configurável
//         },
//         preco: {
//             enumerable: true, // mostra a chave
//             value: estoque, // valor
//             writable: true, // pode alterar
//             configurable: true // configurável
//         },
//     });
// };
