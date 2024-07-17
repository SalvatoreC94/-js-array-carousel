// Array contenente i percorsi delle immagini
const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

// Selezioniamo il contenitore del carosello
const carousel = document.querySelector('.carousel');
let activeIndex = 0; // Indice dell'immagine attiva

// Creare il markup usando un ciclo for
let carouselContent = '';
for (let i = 0; i < images.length; i++) {
    console.log(`Caricando immagine: ${images[i]}`); // Log del percorso dell'immagine
    carouselContent += `
        <img src="${images[i]}" class="carousel-image ${i === 0 ? 'active' : ''}">
    `;
}

// Inserire il contenuto nel carosello
carousel.innerHTML = carouselContent;


console.log('Immagini inserite nel carosello:', images);