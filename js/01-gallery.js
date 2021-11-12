import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);



const addgallery = document.querySelector(".gallery");

const galleryString = galleryItems.map(({ preview, original, description }) =>
    
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
        </a>
    </div>`).join(" ");

addgallery.insertAdjacentHTML(`afterbegin`, galleryString);



addgallery.addEventListener("click", (event) => {
event.preventDefault();
    if (event.target.tagName !== "IMG") return;
    
    const origImg = event.target.dataset.source;
    

    const instance = basicLightbox.create(`
    <img src="${origImg}" width="800" height="600">
`);

    instance.show();
    addgallery.addEventListener("keydown", event => {
        if (event.key === escape) {
       instance.close();
   
    }

        instance.close();
  
  
});
    
 
});



 


   
    

    
    



