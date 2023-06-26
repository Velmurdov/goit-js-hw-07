import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.js-gallery');

const createGalleryItemEl = ({ preview, original, description }) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`; 

galleryEl.innerHTML = galleryItems.map(createGalleryItemEl).join('');

galleryEl.addEventListener('click', (evt) =>{
    if (evt.target.classList.contains('gallery__image')){ 
    evt.preventDefault();

    const originalImg = evt.target.dataset.source;

    const instance = basicLightbox.create(`<img src='${originalImg}' width='800' height='600'>`);

    instance.show();

    instance.element().querySelector('img').setAttribute('src', originalImg );

    const closeLightboxEl = (evt) =>{
        if (evt.key === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', closeLightboxEl);
        }
    }
    document.addEventListener('keydown', closeLightboxEl);}
});
