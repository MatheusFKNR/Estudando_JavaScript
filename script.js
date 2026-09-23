// Criando um objeto
const usuario = {
  nome: "Carlos",
  idade: 25,
  "tipo-de-conta": "Premium" // Chaves com hífen ou espaços exigem aspas
};

// Acessando propriedades
console.log(usuario.nome);               // "Carlos" (Notação de ponto)
console.log(usuario["idade"]);            // 25 (Notação de colchetes)
console.log(usuario["tipo-de-conta"]);   // "Premium" (Obrigatório usar colchetes)

// Acesso dinâmico via variável
const propriedadeDesejada = "nome";
console.log(usuario[propriedadeDesejada]); // "Carlos"