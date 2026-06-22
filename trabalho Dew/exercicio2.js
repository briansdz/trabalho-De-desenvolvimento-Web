// Exercício 2 - Sistema de Matrícula Acadêmica

function sistemaMatricula(disciplinas) {
  // Adicionar nova disciplina
  disciplinas.push("Programação Web");

  // Exibir todas as disciplinas e a quantidade
  let total = 0;
  for (let i = 0; i < disciplinas.length; i++) {
    // Ignorar disciplinas vazias
    if (disciplinas[i] === "") {
      continue;
    }

    // Encerrar caso encontre "TCC"
    if (disciplinas[i] === "TCC") {
      console.log(disciplinas[i]);
      console.log("Laço interrompido");
      break;
    }

    console.log(disciplinas[i]);
    total++;
  }

  // Verificar se cursa JavaScript (só exibe se não foi interrompido por TCC)
  const temTCC = disciplinas.some((d) => d === "TCC");
  if (!temTCC) {
    console.log(`Total: ${total}`);

    const cursaJS = disciplinas.includes("JavaScript");
    if (cursaJS) {
      console.log("Aluno cursa JavaScript");
    } else {
      console.log("Aluno não cursa JavaScript");
    }
  }
}

// Entrada 1
console.log("=== Entrada 1 ===");
const disciplinas1 = ["HTML", "CSS", "JavaScript"];
sistemaMatricula(disciplinas1);

// Entrada 2
console.log("\n=== Entrada 2 ===");
const disciplinas2 = ["Banco de Dados", "", "TCC", "Redes"];
sistemaMatricula(disciplinas2);
