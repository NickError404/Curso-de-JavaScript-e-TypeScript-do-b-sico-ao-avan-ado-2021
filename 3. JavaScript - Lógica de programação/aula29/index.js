const data = new Date();
const diaSemana = data.getDay();


/**
 * Se a case for True ele para no break correspondênte
 * A função switch faz uma escolha coerênte com cada case criado
 */

function getDayText(diaSemana) {
    let diaSemanaTexto;
    
    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto
    case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto
    case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto
    case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto
    case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto
    case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto
    case 6:
        diaSemanaTexto = 'Sabado';
        return diaSemanaTexto
    default:
        diaSemanaTexto = 'Valor inválido';
        return diaSemanaTexto
    } 
}


const dayText = getDayText(diaSemana);

console.log(diaSemana, dayText);


// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta'
// } else if (diaSemana === 5) {
//     diaSemana = 'Sexta';
// } else if (diaSemana === 6) {
//     diaSemana = 'Sábado';
// }else {
//     console.log('Dia da semana inválido!');
// }

