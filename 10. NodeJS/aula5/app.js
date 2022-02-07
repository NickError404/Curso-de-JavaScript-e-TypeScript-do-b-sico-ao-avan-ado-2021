const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/write');
const ler = require('./modules/read');


// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'eduardo'},
//     {nome: 'Luiza'}
// ];
// const json = JSON.stringify(pessoas, '', 2);

// fs.writeFile(caminhoArquivo, json, { flag: 'w', encoding: 'utf8' });
// escreve(caminhoArquivo);

async function lerarquivo(caminho) {
    const dados = await ler(caminho);
    redenrizaDados(dados);
}

function redenrizaDados(dados) {
    dados = JSON.parse(dados);

    dados.forEach(val => console.log(val.nome));
}

lerarquivo(caminhoArquivo);
