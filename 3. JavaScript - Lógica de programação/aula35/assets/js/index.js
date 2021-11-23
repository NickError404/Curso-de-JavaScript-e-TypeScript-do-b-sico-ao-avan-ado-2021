const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

for (let i = 0; i < elementos.length; i++) {
    var para = document.createElement(elementos[i].tag);
    var t = document.createTextNode(elementos[i].texto);

    para.appendChild(t);
    document.getElementById("home").appendChild(para);
}
