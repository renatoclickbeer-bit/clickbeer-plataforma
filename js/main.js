// Menu mobile
const header = document.querySelector(".site-header");
const navToggle = document.getElementById("navToggle");

navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a, .nav-cta").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Renderiza as lojas a partir de js/lojas.js
const storeGrid = document.getElementById("storeGrid");
if (storeGrid && typeof LOJAS_CLICKBEER !== "undefined") {
  storeGrid.innerHTML = LOJAS_CLICKBEER.map(
    (loja) => `
      <article class="store-card">
        <h3>${loja.nome}</h3>
        <p>${loja.endereco}</p>
        <p class="store-hours">${loja.horario}</p>
      </article>
    `
  ).join("");
}
