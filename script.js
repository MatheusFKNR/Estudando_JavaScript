const idade = 20;

// Exemplo usando if/else tradicional para comparação
let tipoPessoaTradicional;
if (idade >= 18) {
  tipoPessoaTradicional = "Adulto";
} else {
  tipoPessoaTradicional = "Menor de idade";
}

// Exemplo usando o operador ternário (mesmo resultado, mais enxuto)
const tipoPessoa = idade >= 18 ? "Adulto" : "Menor de idade";

console.log(tipoPessoa); // "Adulto"