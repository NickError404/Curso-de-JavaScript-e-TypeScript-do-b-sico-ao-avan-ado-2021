function teste() {
    console.log(this);
}

// Métodos de instância e estáticos
// forma de substuir o new
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }
    // Método de instânica
    aumentarVolume() {
        this.volume += 2;
    }
    // Método de instânica
    // Referente a instância em si
    diminuirVolume() {
        this.aumentarVolume -=1;
    }

    // Método estático "static"
    // Este método é referente somente a classe.
    static soma(x, y) {
        console.log(this);
    }
}

// Criando a instância
const controle1 = new ControleRemoto('LG');

// Chamando funções da instância da classe
// Classe intânciada
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1)

// Classe
// chamando diretamente a classe criada pelo método static
console.log(ControleRemoto.soma(50, 13));
