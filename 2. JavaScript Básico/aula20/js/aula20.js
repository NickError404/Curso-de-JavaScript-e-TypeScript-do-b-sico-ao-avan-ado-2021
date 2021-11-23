/**
 * 
 * Função, Array e Objetos
 *
 * Formulário:
 * Nome:
 * Sobrenome:
 * Peso:
 * Altura:
 */

// IIFE 
function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector(".resultado");


    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert('Clicado caralho');
    //     console.log('Foi enviado');
    // };

    const pessoas = [];

    let nome;

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value}</p>`
        resultado.innerHTML += `<p>${sobrenome.value}</p>`
        resultado.innerHTML += `<p>${peso.value}</p>`
        resultado.innerHTML += `<p>${altura.value}</p>`

    }
    
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
