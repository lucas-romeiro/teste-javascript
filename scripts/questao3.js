// Questão 3

// Importando o modulo para leitura de arquivos
const fs = require("fs");

// Ler arquivo e retorna um objeto
const getData = function (address) {
  try {
    const dados = fs.readFileSync(address, "utf8");
    return JSON.parse(dados);
  } catch (err) {
    console.error(`Arquivo não encontrado - ${err.message}`);
    return [];
  }
};

// Obtendo os dados
const dados = getData("../data/dados.json");

// Filtrando os dias com faturamento positivo > 0
const diasComFaturamento = dados.filter((dia) => dia.valor > 0);

// Encontrando o maior e menor faturamento do mês
const { max: maiorFaturamento, min: menorFaturamento } =
  diasComFaturamento.reduce(
    (acc, dia) => ({
      // Compara os dois valore e retorna o menor
      max: Math.max(acc.max, dia.valor),
      // Compara os dois valores e retorna e menor
      min: Math.min(acc.min, dia.valor),
    }),
    { max: -Infinity, min: +Infinity }
  );

// Calculando a média mensal
const mediaMensal = diasComFaturamento.reduce(
  (acc, cur, _, arr) => (acc += cur.valor / arr.length),
  0
);

// Numeros de dias com faturamento maior que a media
const diasAcimaDaMedia = diasComFaturamento.filter(
  (dia) => dia.valor > mediaMensal
).length;

// Resultados
console.log("\n----------Questão 3----------");
console.log(
  `O maior faturamento ocorrido durante o mês foi: R$ ${maiorFaturamento.toFixed(
    2
  )}`
);
console.log(
  `O menor faturamento ocorrido durante o mês foi: R$ ${menorFaturamento.toFixed(
    2
  )}`
);
console.log(`A média mensal foi: R$ ${mediaMensal.toFixed(2)}`);
console.log(`Houve ${diasAcimaDaMedia} dias com faturamento acima da média.`);
