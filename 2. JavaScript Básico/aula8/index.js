/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de alturaEmM e seu IMC é de 25.92592592595924
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let anoNascimento = 2021 - idade;

let imc = peso / (alturaEmM * alturaEmM); // peso / (alturaEmM * alturaEmM)

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)
