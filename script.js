// 1. Informações da tela/janela
console.log(`LARGURA: ${window.innerWidth}px`);
console.log(`ALTURA: ${window.innerHeight}px`);

// 2. Manipulação de URL/Navegação
console.log(window.location.href); // URL atual
// window.location.href = "https://exemplo.com"; // Redireciona a página

// 3. APIs nativas e Temporizadores (o prefixo 'window.' pode ser omitido)
window.setTimeout(() => {
  console.log("Executado após 2 segundos");
}, 2000);

// 4. Armazenamento local no navegador
window.localStorage.setItem("tema", "escuro");
