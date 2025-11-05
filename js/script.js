// js/script.js
// Script de máscaras de input e validação visual para formulário de cadastro
document.addEventListener("DOMContentLoaded", () => {
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");
  const cep = document.getElementById("cep");

  // Função genérica para aplicar máscara e mostrar feedback
  function aplicarMascara(input, regex, formato, nomeCampo) {
    input.addEventListener("input", () => {
      const valorAnterior = input.value;
      input.value = input.value.replace(/\D/g, "").replace(regex, formato);

      // Feedback visual para input incompleto
      if (input.value.length < formato.replace(/[^$]/g, "").length) {
        input.classList.add("input-invalido");
        input.setAttribute("aria-invalid", "true");
        input.setAttribute("aria-describedby", `${nomeCampo}-erro`);
      } else {
        input.classList.remove("input-invalido");
        input.removeAttribute("aria-invalid");
        input.removeAttribute("aria-describedby");
      }
    });
  }

  // Máscara de CPF: 000.000.000-00
  aplicarMascara(
    cpf,
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    "$1.$2.$3-$4",
    "cpf"
  );

  // Máscara de telefone: (00) 00000-0000
  aplicarMascara(
    telefone,
    /(\d{2})(\d{5})(\d{4})/,
    "($1) $2-$3",
    "telefone"
  );

  // Máscara de CEP: 00000-000
  aplicarMascara(
    cep,
    /(\d{5})(\d{3})/,
    "$1-$2",
    "cep"
  );
});
