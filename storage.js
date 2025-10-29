function saveToLocalStorage(form) {
  const data = {
    nome: form.nome.value.trim(),
    email: form.email.value.trim(),
    cpf: form.cpf.value.trim(),
    telefone: form.telefone.value.trim(),
    cep: form.cep.value.trim(),
    nascimento: form.nascimento.value,
    endereco: form.endereco.value.trim()
  };

  const registros = JSON.parse(localStorage.getItem("voluntarios")) || [];
  registros.push(data);
  localStorage.setItem("voluntarios", JSON.stringify(registros));
}

