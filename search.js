document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('#menu-h ul');

    console.log('Menu toggle button:', menuToggle);
    console.log('Menu:', menu);

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
        console.log('Menu toggled, current class:', menu.className);
    });
});