// const meuObjeto = {
//     a: 1,
//     b: 2
// }

// const novoObjeto = Object.create(meuObjeto); // aqui ele tá solicitando um novo objeto herdado do outro objeto.

// novoObjeto.b = 5

// console.log(meuObjeto.hasOwnProperty('map'));

// function SalaAula(alunos) {
//     this.alunos = alunos;
// }

// SalaAula.prototype = {
//     adicionarAluno: function(aluno) {
//         this.alunos.push(aluno)
//     }
// }

// const minhaSala = new SalaAula(['João', 'Maria']);

// minhaSala.adicionarAluno('Pedro');

// console.log(minhaSala.alunos)

function SalaAula(alunos) {
    this.alunos = alunos || []
}

SalaAula.prototype = {
    adicionarAluno: function(aluno) {
        this.alunos.push(aluno)
    },
    mostraAlunos: function() {
        return this.alunos
    }
}

function NovoSala() {
    SalaAula.call(this)
}

NovoSala.prototype = Object.create(SalaAula.prototype)

const novaSala = new NovaSala()

// const novaSala = Object.create(NovoSala.prototype)
// class NovaSala extends SalaAula {}

novaSala.adicionarAluno('João')

console.log(novaSala.mostraAlunos())