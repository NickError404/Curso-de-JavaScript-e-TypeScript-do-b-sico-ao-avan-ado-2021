// value for reference
//                    0
// const names = ['Eduardo', 'Maria', 'Juan'];
// Strings, Objects, Functions, Numbers
// const names = new Array('Eduardo', 'Maria', 'Juan');
// names[2] = 'Juana';
// delete names[2];
// console.log(names);

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const novo = [...nomes] //Spread operator
// novo.push('Igor')
// novo.unshift('Wallace');
// const removido = novo.pop(); // Agora ela remove o valor e recebe na const
// console.log(novo);
// console.log(novo.length);
// console.log(removido);

// Valor por referêcia
//                0         1        2         3         5
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
// const novo = nomes.slice(0, -2);
// console.log(novo);F

const nomes = [ 'Luiz', 'Otávio', 'Miranda' ];
const nome = nomes.join(' ');
console.log(nome);