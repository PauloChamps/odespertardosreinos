document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('#menu-h ul');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});