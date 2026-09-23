// 1. Data e hora atuais
const agora = new Date();

// 2. A partir de uma string no formato ISO (YYYY-MM-DD)
const dataString = new Date("2026-09-23T10:30:00");

// 3. Passando parâmetros: (ano, mês, dia, hora, minuto, segundo)
// ATENÇÃO: O mês começa em 0 (0 = Janeiro, 8 = Setembro, 11 = Dezembro)
const dataEspecifica = new Date(2026, 8, 23, 14, 0, 0);

// 4. A partir de um Timestamp (milissegundos)
const dataTimestamp = new Date(1700000000000);
