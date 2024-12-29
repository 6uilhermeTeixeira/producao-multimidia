// Script do Menu // Script do Menu // Script do Menu // Script do Menu // Script do Menu /
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
// Script do Menu // Script do Menu // Script do Menu // Script do Menu // Script do Menu /