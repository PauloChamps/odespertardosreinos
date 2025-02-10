document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('#menu-h ul');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('show');
        });
    
        document.addEventListener('click', function(event) {
            var isClickInsideMenu = menu.contains(event.target);
            var isClickOnMenuToggle = menuToggle.contains(event.target);
    
            if (!isClickInsideMenu && !isClickOnMenuToggle) {
                menu.classList.remove('show');
            }
        });
    }

    // Zoomable Images
    var zoomableImages = document.querySelectorAll('.zoomable');
    var overlay = document.getElementById('overlay');
    var overlayImg = document.getElementById('overlay-img');
    var closeBtn = document.querySelector('.close');
    var nextButton = document.getElementById('next-button');
    var prevButton = document.getElementById('prev-button');
    var currentIndex = 0;

    if (zoomableImages.length > 0 && overlay && overlayImg && closeBtn && nextButton && prevButton) {
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
    }

    // Barra de Filtragem
    const filterSelect = document.getElementById('filter-select');
    const itemsContainer = document.getElementById('items-container');
    if (filterSelect && itemsContainer) {
        filterSelect.addEventListener('change', function() {
            const selectedValue = this.value;
            filterItems(selectedValue);
        });
    
        function filterItems(filterType) {
            const items = document.querySelectorAll('.image-item-magic');
            items.forEach(item => {
                let shouldDisplay = true;
                item.style.display = 'block'; // Reset display
                switch (filterType) {
                    case 'nome-asc':
                        sortItems('asc');
                        shouldDisplay = false;
                        break;
                    case 'nome-desc':
                        sortItems('desc');
                        shouldDisplay = false;
                        break;
                    case 'tipo-uv':
                        shouldDisplay = item.getAttribute('data-tipo') === 'U.V';
                        break;
                    case 'tipo-mv':
                        shouldDisplay = item.getAttribute('data-tipo') === 'M.V';
                        break;
                    case 'carta-hibridos':
                        shouldDisplay = item.getAttribute('data-carta') === 'Híbridos';
                        break;
                    case 'carta-humanos':
                        shouldDisplay = item.getAttribute('data-carta') === 'Humanos';
                        break;
                    case 'carta-monstros':
                        shouldDisplay = item.getAttribute('data-carta') === 'Monstros';
                        break;
                    case 'carta-elementais':
                        shouldDisplay = item.getAttribute('data-carta') === 'Elementais';
                        break;
                    case 'carta-dano':
                        shouldDisplay = item.getAttribute('data-carta2') === 'Dano';
                        break;
                    case 'carta-vida':
                        shouldDisplay = item.getAttribute('data-carta3') === 'Vida';
                        break;
                    case 'carta-sorte':
                        shouldDisplay = item.getAttribute('data-carta4') === 'Sorte';
                        break;
                    case 'carta-bloqueio':
                        shouldDisplay = item.getAttribute('data-carta5') === 'Bloqueio';
                        break;
                    case 'carta-ressurreicao':
                        shouldDisplay = item.getAttribute('data-carta6') === 'Ressurreição';
                        break;
                    case 'carta-destruicao':
                        shouldDisplay = item.getAttribute('data-carta7') === 'Destruição';
                        break;
                    case 'carta-mundos':
                        shouldDisplay = item.getAttribute('data-carta8') === 'Mundos';
                        break;
                    case 'carta-gplus':
                        shouldDisplay = item.getAttribute('data-carta9') === 'G+';
                        break;
                    case 'carta-ex':
                        shouldDisplay = item.getAttribute('data-carta10') === 'Ex';
                        break;
                    default:
                        shouldDisplay = true;
                        break;
                }
                item.style.display = shouldDisplay ? 'block' : 'none';
            });
        }

        function sortItems(order) {
            const items = Array.from(document.querySelectorAll('.image-item-magic'));
            items.sort((a, b) => {
                const nameA = a.querySelector('h3').textContent.toUpperCase();
                const nameB = b.querySelector('h3').textContent.toUpperCase();
                if (order === 'asc') {
                    return nameA.localeCompare(nameB);
                } else {
                    return nameB.localeCompare(nameA);
                }
            });
            items.forEach(item => itemsContainer.appendChild(item));
        }
    }

    // Calculadora
    let currentTotal = 3000;
    let currentInput = "";
    let operator = null;

    function appendNumber(number) {
        currentInput += number;
        updateDisplay(currentInput);
    }

    function setOperator(op) {
        if (currentInput !== "") {
            calculate();
        }
        operator = op;
        currentTotal = parseInt(document.getElementById('display').value);
        currentInput = "";
    }

    function calculate() {
        if (currentInput === "") return;
        let inputNumber = parseInt(currentInput);
        if (operator === "+") {
            currentTotal += inputNumber;
        } else if (operator === "-") {
            currentTotal -= inputNumber;
        }
        currentInput = "";
        operator = null;
        updateDisplay(currentTotal);
    }

    function resetCalculator() {
        currentTotal = 3000;
        currentInput = "";
        operator = null;
        updateDisplay(currentTotal);
    }

    function updateDisplay(value) {
        const display = document.getElementById('display');
        display.value = value;
    }

    // Configura o primeiro item como ativo no carrossel
    const carouselInner = document.querySelector(".carousel-inner");
    const firstItem = document.querySelector(".carousel-item");
    if (carouselInner && firstItem) {
        carouselInner.scrollLeft = firstItem.offsetLeft;
    }
});
