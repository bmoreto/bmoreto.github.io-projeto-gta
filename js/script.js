const botao = document.querySelector(".btn-plataforma");
const plataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
  plataformas.classList.toggle("ativo");
});
