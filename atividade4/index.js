const url = require('url');
const http = require('http');
const calculadora = require('./util/calculadora');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (pathname.startsWith('/somar')) {
        const a = parseFloat(parsedUrl.pathname.split('/')[2]);
        const b = parseFloat(parsedUrl.pathname.split('/')[3]);
        const resultado = calculadora.somar(a, b);
        res.end(`Resultado da soma: ${resultado}`);
    } else if (pathname.startsWith('/subtrair')) {
        const a = parseFloat(parsedUrl.pathname.split('/')[2]);
        const b = parseFloat(parsedUrl.pathname.split('/')[3]);
        const resultado = calculadora.subtrair(a, b);
        res.end(`Resultado da subtração: ${resultado}`);
    } else if (pathname.startsWith('/multiplicar')) {
        const a = parseFloat(parsedUrl.pathname.split('/')[2]);
        const b = parseFloat(parsedUrl.pathname.split('/')[3]);
        const resultado = calculadora.multiplicar(a, b);
        res.end(`Resultado da multiplicação: ${resultado}`);
    } else if (pathname.startsWith('/dividir')) {
        const a = parseFloat(parsedUrl.pathname.split('/')[2]);
        const b = parseFloat(parsedUrl.pathname.split('/')[3]);
        const resultado = calculadora.dividir(a, b);
        res.end(`Resultado da divisão: ${resultado}`);
    } else {
        res.statusCode = 404;
        res.end('Rota não encontrada');
    }
});

server.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});