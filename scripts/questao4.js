// Questão 4
const dadosDistribuidora = {
  SP: "67836.43",
  RJ: "36678.66",
  MG: "29229.88",
  ES: "27165.48",
  Outros: "19849.53",
};

// Calculando o valor todal do faturamento da distribuidora
const faturamentoTotalDistribuidora = Object.values(dadosDistribuidora)
  .map((valor) => parseFloat(valor)) // Converte os valores para float
  .reduce((acc, cur) => (acc += cur), 0);

const calculaPercentual = function (valor, total) {
  return (valor * 100) / total;
};

// Testes
console.log("\n----------Questão 3----------");
for (const estado in dadosDistribuidora) {
  const valor = parseFloat(dadosDistribuidora[estado]);
  const percentual = calculaPercentual(valor, faturamentoTotalDistribuidora);
  console.log(
    `O percentual de representação do estado ${estado} é de ${percentual.toFixed(
      2
    )}% do faturamento da distribuidora`
  );
}
