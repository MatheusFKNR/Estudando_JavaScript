// Função para adicionar um novo item de tarefa
function adicionarTarefa(texto) {
  const lista = document.querySelector("#lista-tarefas");

  // Criar o item <li>
  const item = document.createElement("li");
  item.textContent = texto;

  // Criar o botão de deletar
  const btnDeletar = document.createElement("button");
  btnDeletar.textContent = "X";
  btnDeletar.style.marginLeft = "10px";

  // Evento para remover o item ao clicar no botão
  btnDeletar.addEventListener("click", () => {
    item.remove();
  });

  // Montar e inserir no DOM
  item.appendChild(btnDeletar);
  lista.appendChild(item);
}

// Executando
adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Praticar manipulação do DOM");
