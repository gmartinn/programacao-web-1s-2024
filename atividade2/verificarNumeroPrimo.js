function verificarNumeroPrimo(n) {
    // 0 e 1 não são primos
    if (n <= 1) {
        return false;
    }
    
    // Verifica se n é divisível por algum número além de 1 e ele mesmo
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
}

// Teste da função
console.log(verificarNumeroPrimo(0)); // Saída: false
console.log(verificarNumeroPrimo(1)); // Saída: false
console.log(verificarNumeroPrimo(2)); // Saída: true
console.log(verificarNumeroPrimo(3)); // Saída: true
console.log(verificarNumeroPrimo(7)); // Saída: true
console.log(verificarNumeroPrimo(83)); // Saída: true
console.log(verificarNumeroPrimo(100)); // Saída: false
console.log(verificarNumeroPrimo(991)); // Saída: true
console.log(verificarNumeroPrimo(104729)); // Saída: true
console.log(verificarNumeroPrimo(14348907)); // Saída: false
