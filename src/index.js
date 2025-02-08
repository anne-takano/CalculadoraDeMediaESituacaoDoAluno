window.calcularMedia = calcularMedia;
window.reiniciarCalculo = reiniciarCalculo;

function calcularMedia() {
  let nota1 = Number(document.getElementById("nota1").value);
  let nota2 = Number(document.getElementById("nota2").value);
  let nota3 = Number(document.getElementById("nota3").value);
  let nota4 = Number(document.getElementById("nota4").value);

  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  document.getElementById("resultado").innerText =
    "A média das avaliações foi de " + media.toFixed(2);
  verificarAprovacao(media);

  document.getElementById("reiniciar").removeAttribute("disabled");
}

function verificarAprovacao(media) {
  if (media >= 5) {
    document.getElementById("statusAprovacao").innerText =
      "O aluno está APROVADO na disciplina";
  } else {
    document.getElementById("statusAprovacao").innerText =
      "O aluno está REPROVADO na disciplina.";
  }
}

function limparCampo(campo) {
  campo.value = "";
}

function reiniciarCalculo() {
  document.querySelectorAll("input").forEach(limparCampo);
  document.getElementById("resultado").innerText = "";
  document.getElementById("statusAprovacao").innerText = "";
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
