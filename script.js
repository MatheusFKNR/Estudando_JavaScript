// 1. Seleção de elementos na página
const titulo = document.querySelector("#titulo-principal");
const botoes = document.querySelectorAll(".btn-acao");

// 2. Alteração de conteúdo e estilos CSS
titulo.textContent = "Novo Título via JS";
titulo.style.color = "green";

// 3. Criando e inserindo novos elementos no HTML
const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Parágrafo criado dinamicamente.";
document.body.appendChild(novoParagrafo);

// 4. Escutando eventos da página
document.addEventListener("click", (event) => {
  console.log("Elemento clicado:", event.target);
});
