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



