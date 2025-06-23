const container = document.getElementById("santos-container");
const searchInput = document.getElementById("search");

fetch("santos.json")
  .then(res => res.json())
  .then(data => {
    mostrarPessoas(data);

    searchInput.addEventListener("input", () => {
      const termo = searchInput.value.toLowerCase();
      const filtrados = data.filter(pessoa =>
        pessoa.nome.toLowerCase().includes(termo)
      );
      mostrarPessoas(filtrados);
    });
  });

function mostrarPessoas(lista) {
  container.innerHTML = "";
  lista.forEach(pessoa => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${pessoa.imagem}" alt="${pessoa.nome}">
      <h3>${pessoa.nome}</h3>
      <p><strong>Festa:</strong> ${pessoa.data_festa}</p>
      <p><strong>Título:</strong> ${pessoa.titulo}</p>
      <p><strong>Origem:</strong> ${pessoa.pais_origem}</p>
    `;
    container.appendChild(card);
  });
}

