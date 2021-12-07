// Dobre os números
// Map altera o valor do array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor *2);
// console.log(numerosEmDobro);




/**
 * Para cada elemento:
 * Retorne apenas uma string com o nome da pessoa
 * Remova apenas a chave "nome" do objeto
 * Adicione uma chave id em cada objeto
 */
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leitica', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
const nomes = pessoas.map(valor => valor.nome);
const idade = pessoas.map(function(obj) {
    // delete obj.nome;
    // return obj; 
    //or
    return {idade: obj.idade}
});
const id = pessoas.map(function (valor, indice) {
    // return {ID: indice, arrays: valor}
    // ou
    // obj.id = indice;
    // return obj;

    const newObject = { ...valor }
    newObject.id = indice;
    return newObject;
});
console.log(id);