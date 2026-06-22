// Exercício 5 - Sistema Completo de Eventos

function formatarData(data) {
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

function exibirEvento(evento) {
  console.log(`Evento: ${evento.nome}`);

  // Verificar se a propriedade local existe e exibir
  const temLocal = "local" in evento && evento.local !== undefined;
  if (temLocal) {
    console.log(`Local: ${evento.local}`);
  }

  // Exibir data formatada no padrão brasileiro
  console.log(formatarData(evento.data));

  // Informar quantos participantes existem
  console.log(`Participantes: ${evento.participantes.length}`);

  // Verificar se existe pelo menos um participante
  if (evento.participantes.length === 0) {
    console.log("Nenhum participante cadastrado");
  }

  // Exibir propriedades e valores do objeto
  for (const chave in evento) {
    if (chave === "participantes") {
      console.log(`${chave}: [${evento[chave].join(", ")}]`);
    } else if (chave === "data") {
      console.log(`${chave}: ${formatarData(evento[chave])}`);
    } else {
      console.log(`${chave}: ${evento[chave]}`);
    }
  }

  // Verificar se a propriedade local existe
  console.log(`Local cadastrado: ${temLocal}`);

  // Exibir o tipo de cada informação
  for (const chave in evento) {
    console.log(`typeof ${chave}: ${typeof evento[chave]}`);
  }
}

// Entrada 1
console.log("=== Entrada 1 ===");
const evento1 = {
  nome: "Semana da Tecnologia",
  local: "Auditório",
  data: new Date("2026-08-20"),
  participantes: ["Ana", "Carlos", "Marcos"],
};
exibirEvento(evento1);

// Entrada 2
console.log("\n=== Entrada 2 ===");
const evento2 = {
  nome: "Workshop Angular",
  local: "Laboratório 5",
  data: new Date("2026-09-10"),
  participantes: [],
};
exibirEvento(evento2);
