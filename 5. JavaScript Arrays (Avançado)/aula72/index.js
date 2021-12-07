// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configurável
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== "number") {
                throw new TypeError('Mensagem');
            }

            estoquePrivado = valor;;
        }
    });
};

function criaProduto(nome) {
    return {
        get nome() { // Responsável por puxar as informações
            return nome;
        },
        set nome(valor) { // Responsável por modificar as informações
            valor = valor.replace('coisa.', '');
            nome= valor;
        }
    };
}

// const p1 = new Produto('Camiseta', 20, 3);
// // console.log(p1);
// p1.estoque = '5000';
// console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.';
console.log(p2.nome);