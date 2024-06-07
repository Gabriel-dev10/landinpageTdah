// seleciona os elementos no html
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.skipbtn');
const backBtn = document.querySelector('.backbtn');

// define a posição dos slides na horizontal
slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
});

let counter = 0;


backBtn.addEventListener('click', function (){
    counter--; 
    carousel();
});

nextBtn.addEventListener('click', function (){
    counter++; 
    carousel(); 
});

function carousel() {
    
    if (counter === slides.length) {
        counter = 0;
    }

    if (counter < 0) {
        counter = slides.length - 1;
    }

    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

// fim carrossel de imgs

// Inicio cronômetro
document.addEventListener("DOMContentLoaded", function() {
    // Data de lançamento (ano, mês, dia, hora, minuto, segundo)
    let dataLancamento = new Date("Dec 1, 2024 12:00:00").getTime();

    // Atualiza a contagem regressiva a cada 1 segundo
    let funcaoContagemRegressiva = setInterval(function() {
        let agora = new Date().getTime();
        let distancia = dataLancamento - agora;

        let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        let horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        let segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        document.getElementById("dias").innerHTML = dias;
        document.getElementById("horas").innerHTML = horas;
        document.getElementById("minutos").innerHTML = minutos;
        document.getElementById("segundos").innerHTML = segundos;

        // Se a contagem regressiva terminar, exibe uma mensagem
        if (distancia < 0) {
            clearInterval(funcaoContagemRegressiva);
            document.getElementById("contagem").innerHTML = "Lançamento!";
        }
    }, 1000);
});

// fim cronômetro
