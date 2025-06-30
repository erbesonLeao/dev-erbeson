// Espera o DOM carregar totalmente antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
  // Cria um botão no topo da página para trocar o tema
  const themeToggleBtn = document.createElement("button");

  // Define o texto inicial do botão
  themeToggleBtn.textContent = "🌙 Tema Escuro";

  // Adiciona uma classe para estilizar o botão (vamos criar no CSS)
  themeToggleBtn.classList.add("theme-toggle");

  // Adiciona o botão dentro do <body>, no início
  document.body.prepend(themeToggleBtn);

  // Função que alterna entre os temas claro e escuro
  themeToggleBtn.addEventListener("click", function () {
    // Alterna a classe 'light-theme' no <body>
    document.body.classList.toggle("light-theme");

    // Verifica se a classe 'light-theme' está ativa
    const lightMode = document.body.classList.contains("light-theme");

    // Altera o texto do botão com base no tema atual
    themeToggleBtn.textContent = lightMode ? "🌑 Tema Escuro" : "🌙 Tema Claro";
  });
});
