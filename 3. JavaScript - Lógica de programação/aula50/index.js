/// ... rest parameter precisa sempre ser o último parametros formal da função
// a cada volta no laço ele pega o valor acumulado em numeros
// in para indice e of para valor em si da vaviável
const conta = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, numeros);
};
conta('*', 1, 20, 30, 40, 50);
