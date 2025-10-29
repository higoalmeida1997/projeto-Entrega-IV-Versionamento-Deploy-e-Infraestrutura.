const pages = {
  home: `
    <section style="max-width: 800px; margin: 0 auto;">
      <h2 style="text-align: center;">ONG Patas da Esperança</h2>
      <p style="text-align: justify;">
        A <strong>Patas da Esperança</strong> é uma organização sem fins lucrativos localizada em Feira de Santana, Bahia, que atua no resgate, cuidado e adoção de animais em situação de vulnerabilidade. Nosso objetivo é oferecer uma nova chance para cães e gatos abandonados, promovendo bem-estar animal e conscientização social.
      </p>

      <div style="text-align: center; margin: 30px 0;">
        <img src="img/equipe.jpg" alt="Equipe da ONG" style="width: 100%; max-width: 600px; border-radius: 8px;" />
      </div>

      <h3>Missão</h3>
      <p>Proteger e cuidar dos animais em situação de risco, promovendo ações de resgate, tratamento, castração e adoção responsável.</p>

      <h3>Visão</h3>
      <p>Ser referência regional no cuidado e proteção animal, com impacto positivo na comunidade e na qualidade de vida dos pets.</p>

      <h3>Valores</h3>
      <ul>
        <li>Amor e respeito pelos animais</li>
        <li>Transparência e responsabilidade</li>
        <li>Sustentabilidade e educação</li>
        <li>Trabalho em equipe e voluntariado</li>
      </ul>

      <div style="margin-top: 30px; display: flex; gap: 20px; justify-content: center;">
        <button type="button" onclick="renderPage('projetos')">Conheça nossos projetos</button>
        <button type="button" onclick="renderPage('cadastro')">Quero ser voluntário</button>
      </div>

      <footer>
        <p>&copy; 2025 ONG Patas da Esperança</p>
        <p>Feira de Santana - Bahia</p>
        <p>Telefone: (99) 99999-9999</p>
        <p>Email: contato@patasdaesperanca.org</p>
      </footer>
    </section>
  `,

  projetos: `
    <section>
      <h2>Projetos</h2>

      <div class="card" id="voluntariado">
        <h3>Seja um voluntário</h3>
        <p>Descubra oportunidades e faça parte da mudança!</p>
        <img src="img/projetos.png" alt="Voluntários" width="350" />
      </div>

      <div class="card" id="doacoes">
        <h3>Como Doar</h3>
        <p>Você pode realizar uma doação via Pix utilizando a chave abaixo:</p>
        <div style="text-align: center; margin-top: 20px;">
          <img src="img/qrcode-pix.png" alt="QR Code Pix" width="220" />
          <p class="badge">Chave Pix: doacoes@patasdaesperanca.org</p>
        </div>
      </div>

      <div class="card" id="adocao">
        <h3>Projeto de Adoção</h3>
        <p>Conectamos animais resgatados a famílias amorosas.</p>
        <img src="img/adocao.png" alt="Adoção de animais" width="350" />
      </div>

      <div class="card" id="vacinacao">
        <h3>Projeto de Vacinação</h3>
        <p>Campanhas regulares de vacinação para garantir a saúde dos animais.</p>
        <img src="img/vacinacao.png" alt="Vacinação de animais" width="350" />
      </div>

      <footer>
        <p>&copy; 2025 ONG Patas da Esperança</p>
        <p>Feira de Santana - Bahia</p>
        <p>Telefone: (99) 99999-9999</p>
        <p>Email: contato@patasdaesperanca.org</p>
      </footer>
    </section>
  `,

  cadastro: `
    <section>
      <h2>Cadastro de Voluntário</h2>
      <form id="form-cadastro">
        <fieldset>
          <legend>Informações Pessoais</legend>
          <label for="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" required />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" required maxlength="14" />
          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" required maxlength="15" />
          <label for="cep">CEP:</label>
          <input type="text" id="cep" name="cep" required maxlength="9" />
          <label for="nascimento">Data de Nascimento:</label>
          <input type="date" id="nascimento" name="nascimento" required />
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>
          <label for="endereco">Endereço:</label>
          <input type="text" id="endereco" name="endereco" required />
        </fieldset>

        <div style="display: flex; justify-content: space-between; margin-top: 20px;">
          <button type="button" onclick="renderPage('home')">Voltar ao Início</button>
          <button type="submit">Enviar Cadastro</button>
        </div>
      </form>

      <div id="formFeedback"></div>

      <footer>
        <p>&copy; 2025 ONG Patas da Esperança</p>
        <p>Feira de Santana - Bahia</p>
        <p>Telefone: (99) 99999-9999</p>
        <p>Email: contato@patasdaesperanca.org</p>
      </footer>
    </section>
  `
};

function renderPage(page) {
  const app = document.getElementById("app");
  app.innerHTML = pages[page];

  if (page === "cadastro") {
    attachFormEvents();
  }
}

document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => renderPage(btn.dataset.page));
});

window.addEventListener("DOMContentLoaded", () => renderPage("home"));

