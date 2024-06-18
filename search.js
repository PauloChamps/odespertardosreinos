document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('#menu-h ul');

    // Adicionar um event listener para o clique no botão do menu
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    // Adicionar um event listener para o clique fora do menu
    document.addEventListener('click', function(event) {
        var isClickInsideMenu = menu.contains(event.target);
        var isClickOnMenuToggle = menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnMenuToggle) {
            menu.classList.remove('show');
        }

        
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlay-img");
    const zoomables = document.querySelectorAll(".zoomable");
    const close = document.querySelector(".close");

    zoomables.forEach(img => {
        img.addEventListener("click", function() {
            overlay.style.display = "flex";
            overlayImg.src = this.src;
        });
    });

    close.addEventListener("click", function() {
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function(event) {
        if (event.target !== overlayImg) {
            overlay.style.display = "none";
        }
    });
});






// home

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Muda a imagem a cada 4 segundos
}

