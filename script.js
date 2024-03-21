document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("criptografarBtn")
    .addEventListener("click", function () {
      const texto = document.getElementById("inputText").value;
      const textoCriptografado = criptografarTexto(texto);
      document.getElementById("outputText").value = textoCriptografado;
    });

  document
    .getElementById("descriptografarBtn")
    .addEventListener("click", function () {
      const textoCriptografado = document.getElementById("inputText").value;
      const textoOriginal = descriptografarTexto(textoCriptografado);
      document.getElementById("outputText").value = textoOriginal;
    });

  document.getElementById("copiarBtn").addEventListener("click", function () {
    const texto = document.getElementById("outputText");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
  });
});

function criptografarTexto(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function descriptografarTexto(textoCriptografado) {
  return textoCriptografado
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}
