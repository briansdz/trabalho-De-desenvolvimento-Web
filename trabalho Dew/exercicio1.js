// Exercício 1 - Sistema de Cadastro de Produtos

function cadastrarProduto(produto) {
  // Converter o preço para número
  const precoNumerico = parseFloat(produto.preco);

  // Validar se o preço é válido
  if (isNaN(precoNumerico)) {
    console.log("Preço inválido!");
    return;
  }

  // Atualizar o preço no objeto com o valor numérico
  produto.preco = precoNumerico;

  // Exibir dados do produto
  exibirProduto(produto);
}

function exibirProduto(produto) {
  console.log(`Produto: ${produto.nome}`);
  console.log(`Categoria: ${produto.categoria}`);
  // Formatar o preço: se tiver centavos, manter 2 casas decimais
  const precoFormatado =
    produto.preco % 1 !== 0 ? produto.preco.toFixed(2) : produto.preco;
  console.log(`Preço: R$ ${precoFormatado}`);

  // Informar se o estoque está baixo
  if (produto.estoque < 10) {
    console.log("Estoque baixo");
  } else {
    console.log("Estoque adequado");
  }

  // Exibir todas as propriedades do objeto
  console.log(JSON.stringify(Object.keys(produto)));

  // Exibir o tipo de cada informação
  for (const chave in produto) {
    console.log(`${chave}: ${typeof produto[chave]}`);
  }
}

// Entrada 1
console.log("=== Entrada 1 ===");
const produto1 = {
  nome: "Monitor",
  categoria: "Informática",
  preco: "899.90",
  estoque: 5,
};
cadastrarProduto(produto1);

// Entrada 2
console.log("\n=== Entrada 2 ===");
const produto2 = {
  nome: "Cadeira",
  categoria: "Escritório",
  preco: "450",
  estoque: 30,
};
cadastrarProduto(produto2);
