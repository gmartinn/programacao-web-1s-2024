const express = require('express');
const app = express();
const estoque = require('./src/estoque')

app.get('/adicionar/:id/:nome/:qtd', function(req, res){
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.nome;
    let p = estoque.criarProduto(id, nome, qtd);
   
    estoque.adicionarProdutos(p);
    res.send(p);
    res.send(estoque.criarProduto(id, nome, qtd));
})

app.get('/listar', function(req, res){
    res.send.listarProdutos();
})

app.get('/remover/:id', function(req, res){
    let id = req.params.id;
})


const PORT = 8080;
app.listen(PORT, function(){
    console.log('app esta rodando na porta ' +  PORT);
});