import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


const addgallery = document.querySelector(".gallery");

const galleryString = galleryItems.map(({ preview, original, description }) =>
    
    `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`).join(" ");

addgallery.insertAdjacentHTML(`afterbegin`, galleryString);
 

addgallery.addEventListener(click, (e) => {
    e.priventDefault();
    if (e.target.nodeName !== "img") {
        return;
    }
    if (e.target.nodeName === "img")
    const instance = basicLightbox.create(`
    <div class="modal">
  <img src ="${e.target.dataset.source}" width-"800"  height-"600">
</div>`);
    instance.show();
    });
    



