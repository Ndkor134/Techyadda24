function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

window.addEventListener('resize', function () {
    var menu = document.querySelector('.menu');
    if (window.innerWidth > 768) {
        menu.classList.remove('active');
    }
});
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change slides every 4 seconds
}
