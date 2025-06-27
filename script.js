document.getElementById('form-contato').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const assunto = document.getElementById('assunto').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const feedback = document.getElementById('feedback');

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nome || !email || !assunto || !mensagem) {
    feedback.textContent = "Por favor, preencha todos os campos.";
    feedback.style.color = "red";
  } else if (!emailValido.test(email)) {
    feedback.textContent = "Email inválido.";
    feedback.style.color = "red";
  } else if (mensagem.length < 20) {
    feedback.textContent = "A mensagem deve ter pelo menos 20 caracteres.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Mensagem enviada com sucesso!";
    feedback.style.color = "green";
    this.reset();
  }
});