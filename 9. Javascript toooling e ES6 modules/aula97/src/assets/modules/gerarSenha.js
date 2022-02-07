const results = document.querySelector('.qtd-caracteres');
const gerarSenha = document.querySelector('.gerar-senha');
const minu = document.querySelector('.chk-minusculas');
const maiu = document.querySelector('.chk-maiusculas');
const num = document.querySelector('.chk-numeros');
const symbols = document.querySelector('.chk-simbolos');
const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const AllSymbols = ['!', '@', '#', '$', '%', '¨', '&', '*'];

export default class geneR {
    get start() {
        gerarSenha.addEventListener("click", () => {
            let vetors = [];

            if (minu.checked || maiu.checked) {
                var str = this.receiveStringMin();
                vetors.push(str);
            };   
            if (num.checked) {
                var nums = this.receiveNum();
                vetors.push(nums);
                
            };
            if (symbols.checked) {
                var sym = this.geneSymbols();
                vetors.push(sym);
            };

            this.randVetors(vetors);
        })
    }   

    randVetors(value) {
        let randed = '';
        for (let c = 0; c < results.value; c++) {
            let rand = value[Math.floor(Math.random() * value.length)][Math.floor(Math.random() * results.value)];
            randed += rand;
        }
        this.resultTela(randed);
    }
 
    geneSymbols() {
        if (symbols.checked) {
            let cont = results.value;
            var PasswdSym = '';
                    for (let i = 0; i < results.value; i++) {
                        let PassSym = AllSymbols[Math.floor(Math.random() * results.value)];
                        PasswdSym = PasswdSym + PassSym;
                    }
        }
        console.log(PasswdSym);
        return PasswdSym;
    }
    
    receiveNum() {
            const digits = '9'.repeat(results.value);
            const num = String(Math.floor(Math.random() * Number(digits)));
            return num;
    }
    
    receiveStringMax(value) {
        var totalStr = '';
        var totalStr1 = '';
        var totalStr2 = '';

        for (let i in value) {
            if (i % 2 === 0) {
                totalStr1 = value[i].toUpperCase();
                totalStr += totalStr1;
            }else {
                totalStr2 = value[i];
                totalStr += totalStr2;
            }
        }
        return totalStr;
    }

    receiveStringAllMax(value) {
        const strings = value.toUpperCase();
        return strings;
    }

    receiveStringMin() {
        let PasswdStr = '';
            for (let i = 0; i < results.value; i++) {
                let PassString = arr[Math.floor(Math.random() * results.value)];
                PasswdStr = PasswdStr + PassString;
            } if (maiu.checked && minu.checked) {
                let value = this.receiveStringMax(PasswdStr);
                return value;
            } else if (maiu.checked) {
                let value = this.receiveStringAllMax(PasswdStr);
                return value;
            } else {
                return PasswdStr;
            }
    }   

    resultTela(value1) {
        const value = value1
        const senhaTela = document.querySelector('.senha-tela');
        senhaTela.innerHTML = value;
    }
}
