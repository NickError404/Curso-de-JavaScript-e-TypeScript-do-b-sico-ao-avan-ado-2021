function relogio () {

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    function getTimeFromSecounds(s) {
        const data = new Date(s * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }


    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = getTimeFromSecounds(segundos);
        }, 1000);
    }


    document.addEventListener('click', function(e) {
        const el = e.target;

        if(el.classList.contains('zerar')) {
            clearInterval(timer);
            segundos = 0;
            relogio.innerHTML = '00:00:00'
            relogio.classList.add('rodando');
        }
        if(el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado', 'rodando');
            clearInterval(timer);
            iniciaRelogio();
        }
        if(el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
    })


    // iniciar.addEventListener('click', function(event) {
    //     relogio.classList.remove('pausado', 'rodando');
    //     clearInterval(timer);
    //     iniciaRelogio();
    // });

    // pausar.addEventListener('click', function(event) {
    //     clearInterval(timer);
    //     relogio.classList.add('pausado');
    // });

    // zerar.addEventListener('click', function(event) {
    //     clearInterval(timer);
    //     segundos = 0;
    //     relogio.innerHTML = '00:00:00'
    //     relogio.classList.add('rodando');
    // });
}
relogio()