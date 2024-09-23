// Questão 2
const fibonacci = function (num) {
  // Verifica se é um número inteiro positivo
  if (num < 0 || !Number.isInteger(num)) return false;

  // Verifica se são os primeiros números da sequência
  if (num <= 1) return true;

  // n1 - primeiro termo | n2 - segundo termo
  let [n1, n2] = [0, 1];

  while (n2 < num) {
    // Calcula os próximos termos realizando a troca por destructuring
    [n1, n2] = [n2, n1 + n2];
  }

  // Verifica se o número fornecido é igual ao fornecido
  return n2 === num;
};

// Testes
const numeroFibonnaci = 33;
const ehFibonacci = fibonacci(numeroFibonnaci);
console.log("\n----------Questão 2----------");
console.log(
  `O número ${numeroFibonnaci} ${
    ehFibonacci ? "pertence" : "não pertence"
  } a sequência de fibonnaci`
);
