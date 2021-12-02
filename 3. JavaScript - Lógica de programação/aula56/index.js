// Factory function (Função fábrica)
// Constructor Function (Função construtora)

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        // Getter, isso também pode ser atribuído como parâmetro
        // pois ele também não seta nenhum valor

        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto = 'Falando sobre NADA') {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,

        // O parametro get, transforma a função em um parâmetro

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
