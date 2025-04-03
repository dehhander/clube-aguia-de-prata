let cont = 0; // Começa no primeiro slide
const sliderContent = document.querySelector(".slider-content");
const slides = document.querySelectorAll(".slide-box");
const totalSlides = slides.length; // Conta quantos slides existem
const manualBtns = document.querySelectorAll(".manual-btn"); // Seleciona as bolinhas

function mudarSlide(index) {
    cont = index; // Atualiza o índice
    const deslocamento = cont * -100; // Calcula a posição correta
    sliderContent.style.transform = `translateX(${deslocamento}vw)`;

    // Atualiza a cor das bolinhas
    manualBtns.forEach((btn, i) => {
        btn.style.backgroundColor = i === cont ? "#ff2500" : "transparent";
    });
}

// Função para avançar automaticamente o slide
function iniciarSlider() {
    setInterval(() => {
        cont = (cont + 1) % totalSlides;
        mudarSlide(cont);
    }, 5000);
}

// Adiciona eventos de clique nas bolinhas
manualBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        mudarSlide(index);
    });
});

// Inicia o slider automático
iniciarSlider();
