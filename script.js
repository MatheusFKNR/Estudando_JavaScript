// ==========================================
// 1. Manipulação de Strings
// ==========================================
const texto = "  JavaScript Moderno  ";

console.log(texto.trim());                  // "JavaScript Moderno" (remove espaços)
console.log(texto.trim().toLowerCase());    // "javascript moderno"
console.log(texto.includes("Script"));      // true

// Template Literals (Interpolação)
const produto = "Notebook";
const preco = 3500;
const mensagem = `O ${produto} custa R$ ${preco},00.`;
console.log(mensagem); // "O Notebook custa R$ 3500,00."


// ==========================================
// 2. Convertendo Strings em Números
// ==========================================
const precoStr = "199.99";
const idadeInput = "25 anos";

// Usando Number() ou o operador unário (+)
const precoReal = Number(precoStr);     // 199.99 (Number)
const idadeReal = +idadeInput;          // NaN (pois tem letras no meio)

// Usando parseInt e parseFloat (ótimos para CSS ou inputs mistos)
const larguraStr = "45.7px";
const larguraInteira = parseInt(larguraStr);    // 45 (ignora o "px")
const larguraExata = parseFloat(larguraStr);     // 45.7

console.log(typeof precoReal, precoReal);       // "number" 199.99
console.log(typeof larguraExata, larguraExata); // "number" 45.7