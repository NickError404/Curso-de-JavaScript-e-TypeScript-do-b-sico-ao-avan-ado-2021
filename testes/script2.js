export default class ratangulo {
    constructor (altura, largura) {
        this.altura = altura; this.largura = largura;
    }

    get area() {
        return this.calcula();
    } 

    calcula() {
        return this.altura * this.largura;
    }

}
