// ==========================================
// 1. Loop FOR (Número definido de repetições)
// ==========================================
// Estrutura: (inicialização; condição; incremento)
for (let i = 1; i <= 5; i++) {
  console.log(`Contagem com FOR: ${i}`);
}


// ==========================================
// 2. Loop WHILE (Repetição baseada em condição)
// ==========================================
let energia = 3;

while (energia > 0) {
  console.log(`Sistema funcionando. Energia restante: ${energia}`);
  energia--; // Essencial para evitar um loop infinito
}

console.log("Sistema desligado: energia esgotada.");