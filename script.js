function sendMessage() {
  let message = document.getElementById("message").value;
  let name = document.getElementById("form-name").value;
  let email = document.getElementById("form-email").value;
  if (message != "" && name != "" && email != "") {
    alert(`Olá ${name}, recemos sua mensagem! Obrigada por participar`);
  } else {
    alert("Por favor, preencha todos os campos");
  }
}
