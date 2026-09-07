// ==========================================
// 1. TIPOS PRIMITIVOS (Imutáveis, passados por valor)
// ==========================================

// String: Textos literais
const texto = "Olá, mundo!"; 
const templateLiteral = `O texto é: ${texto}`;

// Number: Números inteiros, decimais e especiais (Infinity, NaN)
const inteiro = 42;
const decimal = 3.14;
const erroMatematico = NaN; // Not-a-Number (ainda é do tipo number)

// Boolean: Verdadeiro ou Falso
const portaAberta = true;

// Undefined: Declarada, mas nunca inicializada
let semValorDefinido;

// Null: Ausência intencional e explícita de valor
const vazioIntencional = null;

// Symbol: Identificador único e imutável (garante que nunca haverá colisão de nomes)
const idUnico = Symbol("chave_secreta");

// BigInt: Números inteiros maiores que o limite de segurança numérico do JS (terminam com 'n')
const numeroGigante = 9007199254740991n; 


// ==========================================
// 2. TIPOS DE REFERÊNCIA (Mutáveis, passados por endereço de memória)
// ==========================================

// Object: Coleção estruturada de pares chave-valor
const usuario = {
  nome: "Ana",
  idade: 28,
  isAdmin: false
};

// Array: Lista indexada de valores (estruturalmente lido como um Objeto)
const linguagens = ["JavaScript", "TypeScript", "Python"];

// Function: Bloco de código executável (lido como um subtipo de Objeto chamável)
const multiplicar = function(a, b) {
  return a * b;
};


// ==========================================
// 3. INSPECIONANDO OS TIPOS NA PRÁTICA
// ==========================================

console.table([
  { Dado: "texto", TipoReal: typeof texto },                         // "string"
  { Dado: "inteiro", TipoReal: typeof inteiro },                     // "number"
  { Dado: "portaAberta", TipoReal: typeof portaAberta },             // "boolean"
  { Dado: "semValorDefinido", TipoReal: typeof semValorDefinido },   // "undefined"
  { Dado: "vazioIntencional", TipoReal: typeof vazioIntencional },   // "object" ⚠️ (Bug histórico do JS)
  { Dado: "idUnico", TipoReal: typeof idUnico },                     // "symbol"
  { Dado: "numeroGigante", TipoReal: typeof numeroGigante },         // "bigint"
  { Dado: "usuario", TipoReal: typeof usuario },                     // "object"
  { Dado: "linguagens", TipoReal: typeof linguagens },               // "object" (Arrays são objetos sob o capô)
  { Dado: "multiplicar", TipoReal: typeof multiplicar }              // "function"
]);