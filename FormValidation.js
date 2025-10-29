function validateForm(form) {
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const cpf = form.cpf.value.trim();
  const telefone = form.telefone.value.trim();
  const cep = form.cep.value.trim();
  const nascimento = form.nascimento.value;
  const endereco = form.endereco.value.trim();
  const feedback = document.getElementById("formFeedback");

  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const cpfRegex = /^\d{11}$/;
  const telefoneRegex = /^\d{10,11}$/;
  const cepRegex = /^\d{8}$/;

  if (
    !nome ||
    !emailRegex.test(email) ||
    !cpfRegex.test(cpf) ||
    !telefoneRegex.test(telefone) ||
    !cepRegex.test(cep) ||
    !nascimento ||
    !endereco
  ) {
    feedback.textContent = "Preencha todos os campos corretamente.";
    feedback.style.color = "red";
    return false;
  }

  feedback.textContent = "Cadastro realizado com sucesso!";
  feedback.style.color = "green";
  return true;
}

function attachFormEvents() {
  const form = document.getElementById("form-cadastro");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    if (validateForm(form)) {
      saveToLocalStorage(form);
      form.reset();
    }
  });
}
