// Script do Menu // Script do Menu // Script do Menu // Script do Menu // Script do Menu 
// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('nav ul li a');

// Adiciona um evento de clique a cada link
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove a classe 'active' de todos os links
        menuLinks.forEach(item => item.classList.remove('active'));
        // Adiciona a classe 'active' ao link clicado
        this.classList.add('active');
    });
});
// Script do Menu // Script do Menu // Script do Menu // Script do Menu // Script do Menu 

// Script dos Carouseis de Imagens // Script dos Carouseis de Imagens // Script dos Carouseis de Imagens 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
// Script dos Carouseis de Imagens // Script dos Carouseis de Imagens // Script dos Carouseis de Imagens 