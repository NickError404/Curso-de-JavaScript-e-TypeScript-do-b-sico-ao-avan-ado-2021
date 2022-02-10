const express = require('express');
const app = express();

// /profiles/12345?
// campanha=googleads & 
// nome_campanha=seila 

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type"text" name="nome"><br>
    Outro campo: <input type"text" name="outrocampo">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    // prifles/3
    // /profiles/?chave=1=valor1&chave2=valor2&chave3=valor3
    // 
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Recebi o formulário ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
