// ==========================================
// 1. Declaração de Função Tradicional
// ==========================================
// Parâmetros (nome) ficam entre os parênteses
function darBoasVindas(nome) {
  return `Olá, ${nome}! Seja bem-vindo(a).`;
}

// Chamando a função e passando o Argumento ("Ana")
const mensagem = darBoasVindas("Ana");
console.log(mensagem); // "Olá, Ana! Seja bem-vindo(a)."


// ==========================================
// 2. Parâmetros com Valor Padrão (Default)
// ==========================================
// Se nenhum valor for passado, ele usa o valor após o '='
function calcularDesconto(preco, desconto = 10) {
  return preco - (preco * (desconto / 100));
}

console.log(calcularDesconto(100));     // 90 (Usou o desconto padrão de 10%)
console.log(calcularDesconto(100, 50)); // 50 (Sobrescreveu o desconto para 50%)


// ==========================================
// 3. Arrow Function (Sintaxe Moderna - ES6)
// ==========================================
// Muito usada para criar funções anônimas ou atribuí-las a constantes
const multiplicar = (a, b) => {
  return a * b;
};

// Retorno Implícito: Se a função tiver apenas uma linha de código, 
// você pode omitir as chaves {} e a palavra 'return'
const somar = (a, b) => a + b;

console.log(multiplicar(4, 5)); // 20
console.log(somar(10, 15));     // 25