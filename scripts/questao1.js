// Questão 1
const valorDeSoma = function (indice) {
  let soma = 0;
  let k = 0;

  while (k < indice) {
    k++;
    soma += k;
  }

  return soma;
};

// Testes
const indice = 13;
const soma = valorDeSoma(indice);
console.log("----------Questão 1----------");
console.log(`O valor da variável SOMA é ${soma}`);
