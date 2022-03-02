import { galleryItems } from './gallery-items.js';

const refGallery = document.querySelector('.gallery');
refGallery.addEventListener('click', onPictureClick);
createGallery(galleryItems, refGallery);

function onPictureClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`
  );
  instance.show();
  window.addEventListener('keydown', e => (e.code === 'Escape' ? instance.close() : e));
}

function createGallery(list, place) {
  const markup = list
    .map(
      e =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${e.original}">
                <img
                class="gallery__image"
                src="${e.preview}"
                data-source="${e.original}"
                alt="${e.description}"
                onclick='event.preventDefault()'
                />
            </a>
        </div>`
    )
    .join('');

  place.innerHTML = markup;
}
