// por prioridade as
// funções sempre buscam 
// a vaviável no escopo mais
// próximo e depois nos escopos
// mais distantes até encontrar algum valor

const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Otávio'
    falaNome();
}

usaFalaNome();


