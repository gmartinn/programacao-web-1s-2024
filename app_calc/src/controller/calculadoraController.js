const calculadora = require('../calculadora/calculadora');

exports.calcular = (req, res) => {
    const { numero1, numero2, operacao } = req.body;

    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
        res.render('index', { erro: 'Por favor, insira números válidos.' });
        return;
    }

    const resultado = calculadora.calcular(num1, num2, operacao);
    res.render('resultado', { resultado });
};