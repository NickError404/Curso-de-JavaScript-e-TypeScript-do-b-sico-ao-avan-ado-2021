/**
 * (2) * 10                            11 (2)
 * (6) * 9                             10 (6)
 * (4) * 8                              9 (4)
 * (4) * 7 = y    11  - (y %  11) =  x  8 (4)   if x > 9 = 0
 * (4) * 6                              7 (4)
 * (2) * 5                              6 (2)
 * (4) * 4                              5 (4)
 * (4) * 3                              4 (4)
 * (0) * 2                              3 (0)
 *                                      2 (x)
 * 264.442.440-21
 * 
 * 
 */


class validaCpf {
    constructor(cpf, cont){
        Object.defineProperty(this, 'cpflimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf.replace(/\D+/g, '')    
        }),
        Object.defineProperty(this, 'cont', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cont
        })
    }

    repeti() {
        return this.cpflimpo.charAt(0).repeat(this.cpflimpo.length) == this.cpflimpo;
    }

    cal() {
        for (v of this.cpflimpo) {

        }
    }

    valida() {
        if(!this.cpflimpo) return false;
        if(typeof this.cpflimpo !== 'string') return false;
        if(this.cpflimpo.length !== 11) return false;
        if(this.repeti()) return false;

        console.log('Okey!')
    }
}

const valida1 = new validaCpf('264.442.440-21');

valida1.valida();
