// ==========================================
// 1. Uso em Condições Tradicionais (&& e ||)
// ==========================================
const idade = 25;
const temCarteira = true;
const isEstudante = false;

// AND (&&): Ambas precisam ser verdadeiras
console.log("Pode dirigir?", idade >= 18 && temCarteira); // true

// OR (||): Apenas uma precisa ser verdadeira
console.log("Paga meia-entrada?", idade < 18 || isEstudante); // false


// ==========================================
// 2. Inversão com NOT (!)
// ==========================================
const bloqueado = false;
console.log("Acesso liberado?", !bloqueado); // true (inverteu o estado)
console.log("Forçando booleano:", !!"Texto"); // true (duas exclamações convertem qualquer dado para seu valor booleano real)


// ==========================================
// 3. Curto-Circuito (Short-circuit Evaluation)
// ==========================================

// O operador && para e retorna a primeira coisa FALSA que encontrar.
const validacao = true && "Tudo certo" && 0 && "Ignorado";
console.log("Curto-circuito AND:", validacao); // 0 (Parou no 0, pois é falsy)

// O operador || para e retorna a primeira coisa VERDADEIRA que encontrar.
const usuarioPadrao = "" || null || "Visitante" || "Admin";
console.log("Curto-circuito OR:", usuarioPadrao); // "Visitante"

// O operador ?? ignora null/undefined, mas aceita 0 e strings vazias como valores válidos.
const limiteZerado = 0;
const limiteComOR = limiteZerado || 50;      // 50 (Cuidado: o 0 foi descartado como falso)
const limiteComNullish = limiteZerado ?? 50; // 0  (Correto: 0 é um número válido)