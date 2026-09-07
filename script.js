// Valores iniciais
let x = 10;
let y = 3;

// 1. Operações Básicas
console.log("Adição:", x + y);           // 13
console.log("Subtração:", x - y);        // 7
console.log("Multiplicação:", x * y);    // 30
console.log("Divisão:", x / y);          // 3.3333333333333335

// 2. Operações Avançadas
console.log("Resto (Módulo):", x % y);   // 1 (10 dividido por 3 dá 9, sobra 1)
console.log("Exponenciação:", x ** y);   // 1000 (10 elevado a 3)

// 3. Incremento e Decremento (Alteram a própria variável)
let contador = 5;

// Pré-incremento (soma e depois lê a variável)
console.log("Pré-incremento:", ++contador); // 6

// Pós-incremento (lê a variável atual, e só depois soma)
console.log("Pós-incremento:", contador++); // 6 (ainda mostra 6...)
console.log("Valor atualizado:", contador); // 7 (...agora é 7)

// O mesmo se aplica ao decremento (--)
contador--; 
console.log("Após decremento:", contador);  // 6

// 4. Concatenação de Strings com '+'
console.log("Soma vs Concatenação:", 10 + "3"); // "103" (String)