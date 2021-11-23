const verdadeira = true;

// Let tem escopo de bloco {... bloco }
// Var só tem escopo de função


let nome = 'Luiz'; // criando
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otavio'; //criando
    var nome2 = 'Rogério';

    if (verdadeira) {
        var nome2 = 'Ronaldo';
        let nome = 'Outra coisa'
        console.log(nome, nome2)
    } 
}
