// Funções de calllback
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
};


function f1(calllback) {
    setTimeout(function() {
        console.log('f1')
        if (calllback) calllback();
    }, rand());
}
function f2(calllback) {
    setTimeout(function() {
        console.log('f2')
        if (calllback) calllback();
    }, rand());
}
function f3(calllback) {
    setTimeout(function() {
        console.log('f3')
        if (calllback) calllback();
    }, rand());
}


f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Hello World!')
}
