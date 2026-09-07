// 1. Atribuição Básica
let saldo = 100;

// 2. Atribuições Matemáticas (Modificando o próprio valor)
saldo += 50;  // saldo = 100 + 50 (Agora é 150)
saldo -= 20;  // saldo = 150 - 20 (Agora é 130)
saldo *= 2;   // saldo = 130 * 2  (Agora é 260)
saldo /= 10;  // saldo = 260 / 10 (Agora é 26)
saldo %= 5;   // saldo = 26 % 5   (Agora é 1, pois 26/5 sobra 1)

// 3. Atribuições Lógicas (Atualização condicional baseada no estado)
let apelido = "";
apelido ||= "Visitante"; 
// Como "" (string vazia) é avaliado como falso, ele recebe "Visitante".

let configuracoesUser = null;
configuracoesUser ??= { tema: "dark", som: true }; 
// Como a variável é explicitamente null, ela recebe o objeto padrão.

let isAutenticado = true;
isAutenticado &&= "Token gerado: 12345"; 
// Como é true, ele permite a sobrescrita pela nova string.