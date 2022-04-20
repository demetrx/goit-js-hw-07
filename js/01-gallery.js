import galleryItems from './gallery-items.js';

const refGallery = document.querySelector('.gallery');
createGallery(galleryItems, refGallery);

let instance = null;

refGallery.addEventListener('click', onPictureClick);

function onPictureClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  instance = createInstance(e.target.dataset.source);
  instance.show();
}

function createGallery(list, place) {
  const markup = list
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}" >
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                )
                />
            </a>
        </div>`
    )
    .join('');

  place.innerHTML = markup;
}

function onEscClose(e) {
  if (e.code === 'Escape') {
    instance.close();
  }
}

function createInstance(source) {
  return basicLightbox.create(`<img src="${source}" width="800" height="600">`, {
    onShow: () => window.addEventListener('keydown', onEscClose),
    onClose: () => window.removeEventListener('keydown', onEscClose),
  });
}
