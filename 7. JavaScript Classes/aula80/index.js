class DispositoEletronico {
    constructor(nome, cor, modelo) {
        this.nome = nome;
        this.ligado = false;
        this.modelo = modelo;
    }

    ligar() {
        if(this.ligado){
            console.log(this.nome + 'Já está ligado')
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado){
            console.log(this.nome + 'já está desligado')
            return;
        }

        this.ligado = false;
    }

}

// Cria uma classe mais espécifica herdada de uma outra Class
// As extend recebe as class pai, mas as class pai não recebem nada das extend
class Smartphone extends DispositoEletronico {
    constructor(nome, cor) {
        // chama o construtor da classe pai
        super(nome)
        this.cor = cor;
    }
}

class Tablet extends DispositoEletronico {
    constructor(nome, temWifi) {
        super(nome)
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha você alterou o método ligar.')
    }
}

const s1 = new Smartphone('Apple', 'Preto', 'Iphone 8');
console.log(s1);

const t1 = new Tablet('Ipad', true);
// ele vai fazer uma varredura pelas heranças até encontrar algum método
// e retornar
t1.ligar() 
