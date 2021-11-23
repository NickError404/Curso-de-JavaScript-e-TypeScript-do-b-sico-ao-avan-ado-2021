/**
 * Tipos de dados
 * Primitivos:
 * string, number, number
 * boolean, undefined,
 * null (bigint, symbol) - Valores copiados
 * 
 * Referência (mutável) - array, object, function - Passados por referência
 */

// let a = [1, 2, 3];
// let b = [...a]; // puxando o valor sem anexar um mesmo lugar na memória
// let c = b;

// // apartir desse momento a e b tem o mesmo lugar na memória
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Luiz');
// console.log(c);



const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
// const b = a; // aponta o mesmo lugar na memória
const b = {...a} // faz uma cópia do valor

a.nome = 'João';
console.log(a);
console.log(b);
