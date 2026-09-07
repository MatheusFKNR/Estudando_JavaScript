// ==========================================
// 1. Criando e Acessando um Array
// ==========================================
const frutas = ["maçã", "banana", "laranja"];

console.log(frutas[0]); // "maçã" (primeiro elemento)
console.log(frutas[2]); // "laranja" (último elemento)
console.log(frutas.length); // 3 (quantidade de itens)


// ==========================================
// 2. Principais Métodos de Modificação
// ==========================================

// Adiciona um item no final do array
frutas.push("uva"); 
// ["maçã", "banana", "laranja", "uva"]

// Remove o último item do array
frutas.pop(); 
// ["maçã", "banana", "laranja"]

// Adiciona um item no início do array
frutas.unshift("morango"); 
// ["morango", "maçã", "banana", "laranja"]

// Remove o primeiro item do array
frutas.shift(); 
// ["maçã", "banana", "laranja"]


// ==========================================
// 3. Percorrendo um Array (Iteração)
// ==========================================
const numeros = [10, 20, 30, 40];

// Usando o loop for tradicional
for (let i = 0; i < numeros.length; i++) {
  console.log(`Índice ${i}: ${numeros[i]}`);
}

// Usando o método moderno .forEach()
numeros.forEach((numero, indice) => {
  console.log(`Número ${numero} na posição ${indice}`);
});