import ValidaCPF from './CpfValid.js';

function Form () {
    this.form = document.querySelector('.container');
    this.send = () => {
        this.button = this.form.querySelector('.button');
        this.button.addEventListener("click", e => {
            this.nullInfo();
            this.userVerified('.txtUser');
            this.clickClear();
            this.validCpf();
            this.checkPassword('.txtPass');
            this.checkPassword('.txtRepPass');
        });
    };

    this.clickClear = () => {
        this.form.addEventListener('click', e => {
            e.preventDefault();
            const el = e.target;
            if (el.classList.contains('txtName')) {this.clear(this.locals[0]);}
            if (el.classList.contains('txtSubName')) {this.clear(this.locals[1]);}
            if (el.classList.contains('txtCPF')) {this.clear(this.locals[2]);}
            if (el.classList.contains('txtUser')) {this.clear(this.locals[3]);}
            if (el.classList.contains('txtPass')) {this.clear(this.locals[4]);}
            if (el.classList.contains('txtRepPass')) {this.clear(this.locals[5]);}
        })
    }


    this.nullInfo = () => {
        this.locals = [
            '.txtName',
            '.txtSubName',
            '.txtCPF',
            '.txtUser',
            '.txtPass',
            '.txtRepPass'
        ];
        for (let l of this.locals) {
            let local = this.form.querySelector(l);
            if (local.value === '')
            this.setVerified(l, 'Local vazio');
        };
    };
    
    this.checkPassword = (local) => {
        const pass = this.form.querySelector(local);
        let passValue = pass.value.length;
        console.log(passValue);
        console.log(passValue.length);
        if (passValue === 'Local vazio' || passValue === 'Sua senha é muito pequena!' || passValue === 'Sua senha é grande demais!'){
            passValue = ''
            return};
        if (passValue < 6) this.setVerified(local, 'Sua senha é muito pequena!');
        if (passValue > 12) this.setVerified(local, 'Sua senha é grande demais!');
    };

    this.validCpf = () => {
        const local = this.form.querySelector('.txtCPF');
        const valid = new ValidaCPF(local.value);
        if (valid.valida()) return;
        else {this.setVerified('.txtCPF', 'CPF Inválido!')}
    };

    this.userVerified = (local) => {
        this.name = this.form.querySelector(local);
        const user = this.name.value;
        if (!typeof user === 'number') return;

    };

    this.setVerified = (local, msg) => {
        this.local = this.form.querySelector(local);
        this.local.classList.add('bad');
        this.local.value = msg;
    };
    
    this.clear = (local2) => {
        this.local2 = this.form.querySelector(local2);
        this.local2.value = '';
        this.local2.classList.remove('bad');
    };

};

const form = new Form();
form.send();
