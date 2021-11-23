/**
 * Meses em JS
 * 0    Janeiro
 * 1    Fevereiro
 * 2    Março
 * 3    Abril
 * 4    Maio
 * 5    Junho
 * 6    Julho
 * 7    Agosto
 * 8    Setembro
 * 9    Outubro
 * 10   Novembro
 * 11   Dezembro
 */
// O tempo no JS é contado em milésimo de segundos
// 1000 milésimos = + 1 segundo
// 60 segundos é = + 1 minutos
// const tresHoras = 60 * 60 * 1000; 
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // Timestamp Unix = Época unix = 01/01/1970
// Date.now() conta do time 0 até a data de hoje em Ms

// const data = new Date('2019-04-20 20:15:59'); // a, m, d, h, m, s, ms
// console.log('Dia', data.getDate())
// console.log('Mês', data.getMonth() + 1) // Mês começa do zero
// console.log('Ano', data.getFullYear())
// console.log('Hora', data.getHours())
// console.log('Min', data.getMinutes())
// console.log('Seg', data.getSeconds())
// console.log('Ms', data.getMilliseconds())
// console.log('Dia Semana', data.getDay()) // 0 - Domingo, 6 Sábado
// console.log(data.toString());

function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}:`;
}

const data = new Date();
const databrasil = formataData(data);
console.log(databrasil);