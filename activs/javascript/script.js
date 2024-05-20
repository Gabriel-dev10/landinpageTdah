// inicio carrosel de imgs

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.skipbtn');
const backBtn = document.querySelector('.backbtn');

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

// fim carrosel de imgs