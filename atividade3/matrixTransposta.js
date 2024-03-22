function transporMatriz(A) {
    // Função para imprimir a matriz
    function printMatrix(matrix) {
        for (let row of matrix) {
            console.log(row.join("\t"));
        }
    }
    
    // Função para transpor a matriz
    function transpose(matrix) {
        return matrix[0].map((col, i) => matrix.map(row => row[i]));
    }

    console.log("Matriz Original:");
    printMatrix(A);
    
    console.log("\nMatriz Transposta:");
    const transposta = transpose(A);
    printMatrix(transposta);
}

// Exemplo de utilização
const matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transporMatriz(matrizOriginal);