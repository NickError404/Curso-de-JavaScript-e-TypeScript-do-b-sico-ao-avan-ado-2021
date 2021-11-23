// const data = new Date();
// const diaSemana = data.getDay();
// const mesAno = data.getMonth();
// const diaMes = data.getDate();
// const ano = data.getFullYear();
// const hora = data.getHours();
// const minutos = data.getMinutes();

// diaSemanaText = getDayText(diaSemana);
// mesAnoText = getMonthText(mesAno);


// function getDayText(diaSemana) {
//     let diaSemanaTexto;
    
//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             return diaSemanaTexto
//         case 1:
//             diaSemanaTexto = 'segunda-feira';
//             return diaSemanaTexto
//         case 2:
//             diaSemanaTexto = 'terça-feira';
//             return diaSemanaTexto
//         case 3:
//             diaSemanaTexto = 'quarta-feira';
//             return diaSemanaTexto
//         case 4:
//             diaSemanaTexto = 'quinta-feira';
//             return diaSemanaTexto
//         case 5:
//             diaSemanaTexto = 'sexta-feira';
//             return diaSemanaTexto
//         case 6:
//             diaSemanaTexto = 'Sabado';
//             return diaSemanaTexto
//         default:
//             diaSemanaTexto = 'Valor inválido';
//             return diaSemanaTexto
//     }
// }

// function getMonthText (mounth) {

//     let mesTexto;

//     switch (mounth) {
//         case 0:
//             mesTexto = 'janeiro';
//             return mesTexto;
//         case 1:
//             mesTexto = 'fevereiro';
//             return mesTexto;
//         case 2:
//             mesTexto = 'março';
//             return mesTexto;
//         case 3:
//             mesTexto = 'abril';
//             return mesTexto;
//         case 4:
//             mesTexto = 'maio';
//             return mesTexto;
//         case 5:
//             mesTexto = 'junho';
//             return mesTexto;
//         case 6:
//             mesTexto = 'julho';
//             return mesTexto;
//         case 7:
//             mesTexto = 'agosto';
//             return mesTexto;
//         case 8:
//             mesTexto = 'setembro';
//             return mesTexto;
//         case 9:
//             mesTexto = 'outubro';
//             return mesTexto;
//         case 10:
//             mesTexto = 'novembro';
//             return mesTexto;
//         case 11:
//             mesTexto = 'dezembro';
//             return mesTexto;
//         default:
//             mesTexto = 'inválido';
//             return mesTexto;
//     }
// }

// function criaP () {
//     const p = document.createElement('p');
//     return p;
// }

// function zeroEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
// }


// const dayHoje = document.querySelector('#daytoday');

// const p = criaP();

// p.innerHTML = `${diaSemanaText}, ${diaMes} de ${mesAnoText} de ${ano}` + ' ' + `${zeroEsquerda(hora)}:${zeroEsquerda(minutos)}`
// dayHoje.appendChild(p);


const dayHoje = document.querySelector('#daytoday');

const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

dayHoje.innerHTML = data.toLocaleString('pt-BR', opcoes);
