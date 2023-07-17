const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const bar =document.querySelectorAll('.bar');
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active')
});
bar.forEach(()=>{
    navMenu.addEventListener('click',()=>{
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })
    
    
});




const slides = document.querySelectorAll(".slider");
const nextBtn = document.querySelector(".slide-next");
const prevBtn = document.querySelector(".slide-prev");
slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
});

prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
});

function carousel() {
    // working with slides
    // if (counter === slides.length) {
    //   counter = 0;
    // }
    // if (counter < 0) {
    //   counter = slides.length - 1;
    // }
    // working with buttons

    if (counter < slides.length - 1) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (counter > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

prevBtn.style.display = "none";


