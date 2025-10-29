document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log(`Página "${btn.dataset.page}" carregada.`);
  });
});
