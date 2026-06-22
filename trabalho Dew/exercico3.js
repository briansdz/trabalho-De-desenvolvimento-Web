// Exercício 3 - Sistema de Biblioteca

function criarFichaCatalogo(titulo, autor) {
  return `Título: ${titulo} | Autor: ${autor}`;
}

function sistemaLibrary(autores, autorBuscado, titulo) {
  // Transformar a string em array
  const listaAutores = autores.split(",");

  // Exibir cada autor
  listaAutores.forEach((autor) => {
    console.log(autor.trim());
  });

  // Informar se existe determinado autor
  const encontrado = listaAutores.some(
    (a) => a.trim().toLowerCase() === autorBuscado.toLowerCase()
  );
  console.log(encontrado ? "Autor encontrado" : "Autor não encontrado");

  // Exibir ficha formatada
  if (encontrado) {
    const ficha = criarFichaCatalogo(titulo, autorBuscado);
    console.log(ficha);
  }

  // Exibir a lista novamente utilizando join()
  console.log(listaAutores.join(" | "));
}

// Entrada 1
console.log("=== Entrada 1 ===");
const autores1 = "Machado de Assis,Clarice Lispector,Monteiro Lobato";
sistemaLibrary(autores1, "Clarice Lispector", "A Hora da Estrela");

// Entrada 2
console.log("\n=== Entrada 2 ===");
const autores2 = "J. K. Rowling,J. R. R. Tolkien";
sistemaLibrary(autores2, "Machado de Assis", "Dom Casmurro");
