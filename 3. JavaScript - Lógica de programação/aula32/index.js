// ... rest, ... spread
// indice        0  1  2  3  4  5  6  7  8
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const [um, , tres, , cinco, , sete] = numeros;

// console.log(um, tres, cinco, sete);
// // console.log(resto);
//                  0       1       2
//                0 1 2   0 1 2   0 1 2
const numeros = [[1,2,3],[4,5,6],[7,8,9]];

const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);