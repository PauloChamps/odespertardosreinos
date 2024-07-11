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


document.addEventListener('DOMContentLoaded', function() {
    var zoomableImages = document.querySelectorAll('.zoomable');
    var overlay = document.getElementById('overlay');
    var overlayImg = document.getElementById('overlay-img');
    var closeBtn = document.querySelector('.close');
    var nextButton = document.getElementById('next-button');
    var prevButton = document.getElementById('prev-button');
    var currentIndex = 0;

    zoomableImages.forEach(function(image, index) {
        image.addEventListener('click', function() {
            overlay.style.display = 'flex';
            overlayImg.src = image.src;
            currentIndex = index;
        });
    });

    closeBtn.addEventListener('click', function() {
        overlay.style.display = 'none';
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % zoomableImages.length;
        overlayImg.src = zoomableImages[currentIndex].src;
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + zoomableImages.length) % zoomableImages.length;
        overlayImg.src = zoomableImages[currentIndex].src;
    });
});









//CLICAR FORA DA IMAGEM E FECHAR - LOJA PERSONAGENS
function openOverlay(element) {
  var overlay = document.getElementById("overlay");
  var overlayImg = document.getElementById("overlay-img");

  overlay.style.display = "block";
  overlayImg.src = element.src;
}

function closeOverlay(event) {
  var overlay = document.getElementById("overlay");
  if (event.target == overlay || event.target.className == 'close') {
    overlay.style.display = "none";
  }
}
