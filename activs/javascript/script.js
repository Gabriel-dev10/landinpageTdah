// // seleciona os elementos no html
// const slides = document.querySelectorAll('.slide');
// const nextBtn = document.querySelector('.skipbtn');
// const backBtn = document.querySelector('.backbtn');

// // define a posição dos slides na horizontal
// slides.forEach(function(slide, index){
//     slide.style.left = `${index * 100}%`;
// });

// let counter = 0;


// backBtn.addEventListener('click', function (){
//     counter--; 
//     carousel();
// });

// nextBtn.addEventListener('click', function (){
//     counter++; 
//     carousel(); 
// });

// function carousel() {
    
//     if (counter === slides.length) {
//         counter = 0;
//     }

//     if (counter < 0) {
//         counter = slides.length - 1;
//     }

//     slides.forEach(function(slide){
//         slide.style.transform = `translateX(-${counter * 100}%)`;
//     });
// }

function menuNav() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}


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
