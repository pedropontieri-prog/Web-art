let dados = [];
let atual = 0;
let bloqueado = false;

let porta = document.getElementById("porta");
let frente = document.getElementById("frente");
let imagem = document.getElementById("imagem");

// carrega JSON
fetch("dados.json")
  .then(res => res.json())
  .then(data => {
    dados = data.imagens;
  });

porta.onclick = function () {

  if (bloqueado) return;
  if (dados.length === 0) return;

  bloqueado = true;

  imagem.style.backgroundImage = `url(${dados[atual]})`;

  frente.classList.add("abrir");

  setTimeout(() => {

    frente.classList.remove("abrir");

    atual++;

    if (atual >= dados.length) {
      atual = 0;
    }

    bloqueado = false;

  }, 5000);

};
