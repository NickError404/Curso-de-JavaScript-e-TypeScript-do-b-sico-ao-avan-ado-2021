// 705.484.450-52 070.987.720-03
/**
 * 7x 0x 5x 4x 8x 4x 4x 5x 0x
 * 10 9  8  7  6  5  4  3  2
 * 70 0  40 28 48 20 16 15 0 = 237
 * 
 * 11 - (237 % 11) = 5 (Primeiro dígito)
 * se dígito > 9  é considerado como = 0
 * 
 * 7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
 * 11 10 9  8  7  6  5  4  3  2
 * 77 0  45 32 56 24 20 20 0  10 = 284
 * 
 * 11 - (284 % 11) = 2 (Segundo dígito)
 */

function Calculo(cpff) {

    const cpf = cpff;

    this.inicia = () => {
        const equation1 = this.multiply(cpf, 10);
        // console.log(equation1);
        const equation2 = this.multiply(equation1, 11);
        const digit1 = equation2.slice(-2, -1);
        const digit2 = equation2.slice(-3, -2);
        console.log(`Os dígitos do CPF ${cpf} é ${digit1}${digit2}`);
    };

    this.multiply = (cpf, multiplicador) => {
        let total = 0;
        for (value of cpf) {
            const mult = value * multiplicador
            multiplicador = multiplicador - 1;
            total = total + mult
        }
        return cpf + this.resultDiv(total);
    };

    this.resultDiv = (value) => {
        let restDiv = 11 - (value % 11);

        // console.log(restDiv);

        if (restDiv > 9) {
            return restDiv = 0;
        } else {
            return restDiv
        };
    };

};
const calculadora = new Calculo('287660450')
calculadora.inicia();