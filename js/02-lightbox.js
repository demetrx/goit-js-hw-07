import galleryItems from './gallery-items.js';

const refGallery = document.querySelector('.gallery');
createGallery(galleryItems, refGallery);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

function createGallery(list, place) {
  const markup = list
    .map(
      e => `<a class="gallery__item" href="${e.original}" onclick="event.preventDefault()">
        <img class="gallery__image" src="${e.preview}" alt="${e.description}" />
        </a>`
    )
    .join('');

  place.innerHTML = markup;
}
