
// menu 
function menuNav() {
    let menuMobile = document.querySelector('.mobile-menu');
    let overlayMenu = document.querySelector('#overlay-menu');
    
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        overlayMenu.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
        overlayMenu.classList.add('open');
    }
}

document.querySelector('#overlay-menu').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.remove('open');
    this.classList.remove('open');
});


// carrossel
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.skipbtn');
const backBtn = document.querySelector('.backbtn');

slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
});

let contar = 0;
let intervaloId; 

//Avanço automático
function startCarrossel() {
    intervaloId = setInterval(function() {
        contar++;
        carrossel();
    }, 3000); 
}

function stopCarrossel() {
    clearInterval(intervaloId);
}

startCarrossel();


nextBtn.addEventListener('click', function (){
    contar++; 
    stopCarrossel(); 
    carrossel(); 
    startCarrossel(); 
});


backBtn.addEventListener('click', function (){
    contar--; 
    stopCarrossel(); 
    carrossel(); 
    startCarrossel(); 
});

// reinicia o contador
function carrossel() {
    if (contar >= slides.length) {
        contar = 0; 
    }

    if (contar < 0) {
        contar = slides.length - 1; 
    }

    slides.forEach(function(slide, index){
        slide.style.transform = `translateX(-${contar * 100}%)`;
    });
}
