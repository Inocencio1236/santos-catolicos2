const container = document.getElementById("santos-container");
const searchInput = document.getElementById("search");

fetch("santos.json")
  .then(res => res.json())
  .then(data => {
    mostrarSantos(data);

    searchInput.addEventListener("input", () => {
      const termo = searchInput.value.toLowerCase();
      const filtrados = data.filter(santo =>
        santo.nome.toLowerCase().includes(termo)
      );
      mostrarSantos(filtrados);
    });
  });

function mostrarSantos(lista) {
  container.innerHTML = "";
  lista.forEach(santo => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${santo.imagem}" alt="${santo.nome}">
      <h3>${santo.nome}</h3>
      <p><strong>Festa:</strong> ${santo.data_festa}</p>
      <p><strong>Título:</strong> ${santo.titulo}</p>
      <p><strong>Origem:</strong> ${santo.pais_origem}</p>
    `;
    container.appendChild(card);
  });
}
