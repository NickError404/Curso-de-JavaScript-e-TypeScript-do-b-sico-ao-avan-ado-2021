// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco, material);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
};
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * percentual / 100);
};

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Mr. Robot', 15.90, 'Plastic', 5);
caneca.estoque = 100;

console.log(caneca);
console.log(caneca.estoque);

