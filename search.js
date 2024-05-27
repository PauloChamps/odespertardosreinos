document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    console.log('Termo de busca:', searchTerm);
    searchImages(searchTerm);
});

function searchImages(searchTerm) {
    console.log('Pesquisando imagens para:', searchTerm);
    var searchResults = document.getElementById('search-results');
    searchResults.innerHTML = ''; // Limpa os resultados anteriores

    // Lista de nomes de arquivos de imagens (substitua com os seus nomes de arquivo)
    var imageFiles = ['boss.jpeg', 'imagem2.jpg', 'imagem3.jpg'];

    // Filtra os nomes de arquivo que contêm o termo de busca
    var filteredImages = imageFiles.filter(function(imageFile) {
        return imageFile.toLowerCase().includes(searchTerm);
    });

    console.log('Imagens encontradas:', filteredImages);

    // Exibe os resultados na página
    if (filteredImages.length > 0) {
        filteredImages.forEach(function(imageFile) {
            var imgElement = document.createElement('img');
            imgElement.src = 'O Despertar dos Reinos/arquivos/' + imageFile; // Corrigido o caminho da imagem
            imgElement.alt = imageFile; // Use o nome do arquivo como texto alternativo
            searchResults.appendChild(imgElement);
        });
    } else {
        searchResults.textContent = 'Nenhuma imagem encontrada.';
    }
}