// script.js
// Funções para aplicar máscaras de input em campos de CPF, telefone e CEP
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona os inputs pelo ID
  const cpfInput = document.getElementById("cpf");
  const telefoneInput = document.getElementById("telefone");
  const cepInput = document.getElementById("cep");

  // Valida se os campos existem antes de adicionar eventos
  if (cpfInput) {
    cpfInput.addEventListener("input", () => {
      // Remove tudo que não for número e aplica máscara de CPF: 000.000.000-00
      cpfInput.value = cpfInput.value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    });
  }

  if (telefoneInput) {
    telefoneInput.addEventListener("input", () => {
      // Remove tudo que não for número e aplica máscara de telefone: (00) 00000-0000
      telefoneInput.value = telefoneInput.value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    });
  }

  if (cepInput) {
    cepInput.addEventListener("input", () => {
      // Remove tudo que não for número e aplica máscara de CEP: 00000-000
      cepInput.value = cepInput.value
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d{3})/, "$1-$2");
    });
  }
});
