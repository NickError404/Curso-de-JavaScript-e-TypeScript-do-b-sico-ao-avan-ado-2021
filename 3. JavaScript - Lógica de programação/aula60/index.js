/**
 * Um função recursiva é que tem em sua própria estrutura um chamado dela mesma em si
 * em formato de loop, nesse exemplo o chamado foi feito como condição um if statement.
 */
function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);
