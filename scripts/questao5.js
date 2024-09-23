// Questão 5

// String para entrada de dados
const strNormal = "Test target sistemas";

// Função que inverte a string sem o auxilio de funções prontas
const inverteString = function (str) {
  if (str.length > 1) {
    let novaString = "";
    const tamanho = str.length;
    for (let i = 0; i <= tamanho; i++) {
      novaString += str[tamanho - (1 + i)];
    }

    return novaString;
  }

  return str;
};

// Testes
console.log("\n----------Questão 5----------");
console.log(`A string é ${strNormal}`);
console.log(`A string invertida é ${inverteString(strNormal)}`);
