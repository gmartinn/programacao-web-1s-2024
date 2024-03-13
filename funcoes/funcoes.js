function imprimirOpercao(){
    let a = 1;
    let b = 3;
    
    console.log(`O resultado da soma entre ${a} e ${b} é ${a + b}`);
}

imprimirOpercao();

function imprimirOpercaoV2(a, b){
    console.log(`O resultado da soma entre ${a} e ${b} é ${a + b}`);
}
imprimirOpercaoV2(3,5);
imprimirOpercaoV2(7,9);
imprimirOpercaoV2('1',"3");

function imprimirOpercaoV3(a, b, op){
    let c;

    switch(op){
        case '+':
            c = a + b;
            break;
        case '-':
            c = a - b;
            break;
        case '*':
            c = a * b;
            break;
        case '/':
            c = a / b;
            break;
    }
    console.log(`O resultado da ${op} entre ${a} e ${b} é ${c}`);
}

imprimirOpercaoV3();