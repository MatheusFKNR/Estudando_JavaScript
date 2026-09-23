//<div id="card-principal" class="card ativo" data-categoria="tech" style="color: blue; padding: 20px;">
//<h2 id="titulo">Título do Card</h2>
//<p class="descricao">Texto com <strong style="display:none">conteúdo oculto</strong>.</p>
//<input type="text" id="campo-nome" value="Carlos" disabled />
//</div>

//HTML acima para contexto

// Selecionando os elementos de teste
const card = document.querySelector("#card-principal");
const titulo = document.querySelector("#titulo");
const input = document.querySelector("#campo-nome");

// ==============================================================================
// 1. CONTEÚDO E TEXTO
// ==============================================================================
console.log(titulo.textContent); // "Título do Card" (Texto bruto, ignora CSS/ocultos)
console.log(titulo.innerText); // "Título do Card" (Texto visível na tela)
console.log(card.innerHTML); // Retorna todo o HTML interno como string
console.log(card.outerHTML); // Retorna o elemento completo + o HTML interno

// Alterando conteúdo:
titulo.textContent = "Novo Título";
// titulo.innerHTML = "<em>Novo Título em Itálico</em>";

// ==============================================================================
// 2. CLASSES E ESTILOS CSS
// ==============================================================================
console.log(card.className); // "card ativo" (String com todas as classes)

// Manipulação via classList (Mais recomendada)
card.classList.add("destaque"); // Adiciona classe
card.classList.remove("ativo"); // Remove classe
card.classList.toggle("selecionado"); // Alterna (adiciona se não existir, remove se existir)
console.log(card.classList.contains("card")); // true (verifica se a classe existe)

// Estilos Inline (via propriedade style)
card.style.backgroundColor = "#f4f4f4"; // camelCase para propriedades com hífen
card.style.borderRadius = "8px";

// Estilos computados (Retorna o estilo real aplicado via CSS externo)
const estilosFinais = window.getComputedStyle(card);
console.log(estilosFinais.padding); // "20px"

// ==============================================================================
// 3. ATRIBUTOS E DATASET
// ==============================================================================
console.log(card.id); // "card-principal"
console.log(card.hasAttribute("data-categoria")); // true

// Manipulação genérica de atributos
console.log(card.getAttribute("data-categoria")); // "tech"
card.setAttribute("data-status", "publicado"); // Adiciona atributo status="publicado"
card.removeAttribute("data-status"); // Remove atributo

// Atributos customizados data-* (via dataset)
console.log(card.dataset.categoria); // "tech"
card.dataset.autor = "Ana"; // Cria o atributo data-autor="Ana"

// ==============================================================================
// 4. HIERARQUIA E RELACIONAMENTOS (NAVEGAÇÃO)
// ==============================================================================
console.log(titulo.parentElement); // Retorna a div #card-principal
console.log(card.children); // HTMLCollection com os filhos directos [h2, p, input]
console.log(card.firstElementChild); // Primeiro filho element (h2)
console.log(card.lastElementChild); // Último filho element (input)
console.log(titulo.nextElementSibling); // Próximo irmão no mesmo nível (p)

// Subindo até encontrar o ancestral mais próximo que corresponda ao seletor CSS
console.log(titulo.closest(".card")); // Retorna a div #card-principal

// ==============================================================================
// 5. DIMENSÕES, POSIÇÃO E MÉTRICAS
// ==============================================================================
console.log(card.offsetWidth, card.offsetHeight); // Largura/Altura total (inclui padding e bordas)
console.log(card.clientWidth, card.clientHeight); // Largura/Altura interna (inclui padding, exclui bordas)
console.log(card.scrollWidth, card.scrollHeight); // Dimensão total do conteúdo (mesmo com rolagem)

// Retorna tamanho exato e posição relativa à viewport (janela)
const posicao = card.getBoundingClientRect();
console.log(posicao.top, posicao.left, posicao.width, posicao.height);

// ==============================================================================
// 6. ESTADO E FORMULÁRIOS
// ==============================================================================
console.log(input.value); // "Carlos" (Conteúdo digitado em inputs/textareas)
console.log(input.disabled); // true (Verifica se está desabilitado)

input.value = "Matheus"; // Altera o valor digitado
input.disabled = false; // Habilita o campo
input.focus(); // Coloca o foco do teclado no campo
// input.blur();               // Remove o foco do campo
