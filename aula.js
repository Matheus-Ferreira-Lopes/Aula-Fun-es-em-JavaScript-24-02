
////// Funções é uma bloco de codigo reutilizavel, criado para execultar uma tarefa especifica

function nomeDaFunçao (parametrol, parametrol2) {
    // Codigo que será execultado
    return resultado;
}

// Exemplo 01 - Somar dois números 

function somar(a,b) {
    return a + b ;
}
console.log(somar(2,3)); // Resultado = 5



function realParaDOlar(valorReal, cotaçao) {
    return valorReal / cotaçao
}

console.log(realParaDOlar(20,5.17).toFixed(2))

// Calcule aumento de salario
function calcularAumento(salario) {
    return salario + (salario * 0.25)
}
console.log(calcularAumento(10000))


///////////////////////////////////////////////////////////////////////////////////////////////


console.log("---------------------------------------------------------")

function dobro(numero) {
    return numero * 2;
}

// Exemplos de uso:
console.log(dobro(5));   // Resultado: 10
console.log(dobro(10));  // Resultado: 20



console.log("---------------------------------------------------------")

function triplo(numero) {
    return numero * 3;
}

// Exemplos de uso:
console.log(triplo(5));   // Resultado: 15
console.log(triplo(10));  // Resultado: 30


console.log("---------------------------------------------------------")

function soma(numero1, numero2) {
    return numero1 + numero2;
}

// Exemplos de uso:
console.log(soma(10, 20));  // Resultado: 30
console.log(soma(-5, 10));  // Resultado: 5

console.log("---------------------------------------------------------")

function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}

// Exemplos de uso:
console.log(multiplicacao(4, 5));   // Resultado: 20
console.log(multiplicacao(3, 7));   // Resultado: 21


console.log("---------------------------------------------------------")

function realParaDolar(valorEmReal) {
    const taxaCambio = 5; // 1 dólar = 5 reais
    return valorEmReal / taxaCambio;
}

// Exemplos de uso:
console.log(realParaDolar(100));  // Resultado: 20 dólares
console.log(realParaDolar(50));   // Resultado: 10 dólares


console.log("---------------------------------------------------------")

function dolarParaReal(valorEmDolar) {
    const taxaCambio = 5; // 1 dólar = 5 reais
    return valorEmDolar * taxaCambio;
}

// Exemplos de uso:
console.log(dolarParaReal(20));  // Resultado: 100 reais
console.log(dolarParaReal(10));  // Resultado: 50 reais


console.log("---------------------------------------------------------") 

function aumentoSalario(salario) {
    const percentualAumento = 0.10; // 10%
    return salario + (salario * percentualAumento);
}

// Exemplos de uso:
console.log(aumentoSalario(1000));  // Resultado: 1100


console.log("---------------------------------------------------------")

function ehPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Exemplos de uso:
console.log(ehPar(4));   // Resultado: true
console.log(ehPar(7));   // Resultado: false


console.log("---------------------------------------------------------")

function imprimir1a10() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// Chamando a função:
imprimir1a10();
// Irá imprimir: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10


console.log("---------------------------------------------------------")

function imprimirAte(limite) {
    for (let i = 1; i <= limite; i++) {
        console.log(i);
    }
}

// Exemplos de uso:
imprimirAte(5);
// Irá imprimir: 1, 2, 3, 4, 5



console.log("---------------------------------------------------------")

function somarAte10() {
    let soma = 0; 
    
    for (let i = 1; i <= 10; i++) {
        soma = soma + i; 
    }
    
    return soma;
}

// Resultado: 55 (1+2+3+4+5+6+7+8+9+10)
console.log(somarAte10());


console.log("---------------------------------------------------------")

function contarParesAte10() {
    let quantidade = 0;
    
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            quantidade = quantidade + 1;
        }
    }
    
    return quantidade;
}

// Resultado: 5
console.log(contarParesAte10());


console.log("---------------------------------------------------------")

function tabuada(numero) {
    console.log("Tabuada do " + numero + ":");
    
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}

// Exemplo de uso com o número 5:
tabuada(5);


console.log("---------------------------------------------------------")

function contagemRegressiva(numeroInicial) {
    for (let i = numeroInicial; i >= 0; i--) {
        console.log(i);
    }
}

// Exemplo de uso:
contagemRegressiva(5);
// Irá imprimir: 5, 4, 3, 2, 1, 0


console.log("---------------------------------------------------------")

function encontrar27() {
    for (let i = 1; i <= 50; i++) {
        if (i === 27) {
            console.log("Encontrei o número 27 na posição " + i);
            return; 
        }
    }
}


encontrar27();



console.log("---------------------------------------------------------")


function somarParesAte(limite) {
    let soma = 0;
    
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            soma = soma + i;
        }
    }
    
    return soma;
}

// Exemplos de uso:
console.log(somarParesAte(5));   // Resultado: 2+4 = 6
console.log(somarParesAte(6));   // Resultado: 2+4+6 = 12



console.log("---------------------------------------------------------")

function contarImpares(limite) {
    let quantidade = 0;
    
    for (let i = 1; i <= limite; i++) {
        if (i % 2 !== 0) {
            quantidade = quantidade + 1;
        }
    }
    
    return quantidade;
}

// Exemplos de uso:
console.log(contarImpares(10));  // Resultado: 5 (1,3,5,7,9)
console.log(contarImpares(5));   // Resultado: 3 (1,3,5)


console.log("---------------------------------------------------------")


function media(numero1, numero2) {
    return (numero1 + numero2) / 2;
}

// Exemplos de uso:
console.log(media(0, 10));   // Resultado: 5
console.log(media(7, 9));    // Resultado: 8



console.log("---------------------------------------------------------")


function quadrado(numero) {
    return numero * numero;
}

// Exemplos de uso:
console.log(quadrado(5));   // Resultado: 25
console.log(quadrado(10));  // Resultado: 100
