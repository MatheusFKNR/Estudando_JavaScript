// ==========================================
// 1. O perigo do (==) vs A segurança do (===)
// ==========================================
const numero = 10;      // Tipo Number
const texto = "10";     // Tipo String

console.log(numero == texto);  // true  (O JS transforma o texto em número por baixo dos panos)
console.log(numero === texto); // false (Tipos diferentes, falha na hora)

console.log(0 == false);       // true  (Zero é considerado "falso" na conversão solta)
console.log(0 === false);      // false (Number é diferente de Boolean)


// ==========================================
// 2. Comparações Matemáticas
// ==========================================
const idade = 18;

console.log(idade > 18);  // false (18 não é MAIOR que 18)
console.log(idade >= 18); // true  (18 é MAIOR OU IGUAL a 18)
console.log(idade < 21);  // true


// ==========================================
// 3. Comparações com Strings (Ordem Alfabética/Unicode)
// ==========================================
console.log("abacaxi" < "banana"); // true (A letra 'a' vem antes do 'b')
console.log("Zebra" < "abacaxi");  // true (⚠️ Letras maiúsculas têm numeração menor na tabela Unicode)