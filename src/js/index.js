const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // Remove seleção anterior do botão
        document.querySelector(".botao.selecionado").classList.remove("selecionado");
        botao.classList.add("selecionado");

        // Esconde personagem atual
        document.querySelector(".personagem.selecionado").classList.remove("selecionado");

        // Mostra o personagem correspondente ao botão clicado
        personagens[indice].classList.add("selecionado");
    });
});