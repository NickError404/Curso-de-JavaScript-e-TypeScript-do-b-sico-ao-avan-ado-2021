function Calculadora() {
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', event => {
            if (event.keyCode !== 13) return;
            this.realizaConta();
        });
        };  

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta(el);
        });
    };

    this.addNumDisplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus();
    }
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);

        this.realizaConta = () => {
            try {
                const conta = eval(this.display.value);

                if(!conta) {
                    alert(`${conta} é uma conta inválida`);
                    return;
                }

                this.display.value = conta;
            } catch (e) {
                alert('Conta Inválida');
                return;
            }
        };
}
// new cria um novo molde, ou seja um novo
// módulo sem dependência ou link algum com o original

const calculadora = new Calculadora();
calculadora.inicia();