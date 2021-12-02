const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function limpaInput() {
    inputTarefa.value = '';
    tarefas.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar esta tarefa');
    li.appendChild(botaoApagar);
}


function criaLi() {
    const li = document.createElement('li');
    return li;
}


function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefas();
}


inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if(!inputTarefa) return;
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
});


// capturar evento de click
btnTarefa.addEventListener('click', function() {
    // verificar o valor do inputTarefa
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    limpaInput();
});


document.addEventListener('click', function(e) {
    const el = e.target;
// el.parentElment para pegar o elemento pai desejado
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})


function salvarTarefas() {
  const litarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of litarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
};

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(listaDeTarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();
