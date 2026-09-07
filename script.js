const cargo = "gerente";
let bonus;

switch (cargo) {
  case "estagiario":
    bonus = 200;
    break;
  case "desenvolvedor":
    bonus = 1000;
    break;
  case "gerente":
    bonus = 2500;
    break;
  default:
    bonus = 500; // Valor padrão se o cargo não estiver na lista
}

console.log(`Cargo: ${cargo} | Bônus: R$ ${bonus}`);
// Saída: Cargo: gerente | Bônus: R$ 2500