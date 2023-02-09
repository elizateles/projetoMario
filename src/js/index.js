// Obejtivo 1 - Ao clicar no trailer, abrir a modal

// passo 1 - dar um jeito de pegara um elemento que representa o botão na tela usando o js.
const botaoTrailer = document.querySelector(".botao-trailer")
const video = document.getElementById("video");
const linkDoVideo = video.src;



//passo 3 - dar um jeito de pegar o elemento da modal no js
const modal = document.querySelector(".modal");

// passo 2 - identificar quando o usuario clicar no botão.
//criando a função é assim () => {}
botaoTrailer.addEventListener("click", () => {
    //passo 4 - abrir a modal na tela
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

// Objetivo 2 - Quando o usuário clicar no X devemos fechar a modal.
// Passo 1- dar um jeito de pegar o elemento de fechar modal usando js.

const botaoFecharModal = document.querySelector(".fechar-modal");

// passo 2 - dar um jeito de identificar quando o usuário clicar no X
botaoFecharModal.addEventListener("click", () => {
    //passo 3 - fechar a modaal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});



