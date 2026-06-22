// Exercício 4 - Sistema de Controle Financeiro

function calcularTotalGastos(valores) {
  let total = 0;

  for (let i = 0; i < valores.length; i++) {
    const valor = parseFloat(valores[i]);

    // Ignorar valores inválidos
    if (isNaN(valor)) {
      console.log(`Valor inválido ignorado: "${valores[i]}"`);
      continue;
    }

    total += valor;
  }

  return total;
}

function sistemaFinanceiro(valores) {
  const total = calcularTotalGastos(valores);

  // Formatar o total (remover zeros desnecessários)
  const totalFormatado = total % 1 === 0 ? total : total.toFixed(2);

  console.log(`Total: R$ ${totalFormatado}`);

  // Informar se ultrapassou R$ 2.000
  if (total > 2000) {
    console.log("Limite ultrapassado");
  } else {
    console.log("Gastos dentro do limite");
  }
}

// Entrada 1
console.log("=== Entrada 1 ===");
const gastos1 = ["500", "350.50", "1000"];
sistemaFinanceiro(gastos1);

// Entrada 2
console.log("\n=== Entrada 2 ===");
const gastos2 = ["800", "900", "700"];
sistemaFinanceiro(gastos2);

// Teste com valor inválido
console.log("\n=== Teste com valor inválido ===");
const gastos3 = ["300", "abc", "500", "NaN", "200"];
sistemaFinanceiro(gastos3);
