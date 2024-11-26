document.addEventListener("DOMContentLoaded", () => {
  const imageNodes = document.querySelectorAll("img.gallery__item__img");

  imageNodes.forEach((node) => {
    node.addEventListener("click", () => {
      openModal(node.src);
    });
  });
});

// Library source code

function openModal(imageSrc) {
  // save initial body overflow value to restore it later
  const initialBodyOverflow = document.body.style.overflow;

  // disable scrolling
  document.body.style.overflow = "hidden";

  // initialize modal
  const modal = document.createElement("div");
  modal.id = "js-imagemodal";
  modal.innerHTML = `<img src="${imageSrc}" alt="" class="modal__content__img" />`;

  // close modal when clicked and restore body overflow
  modal.addEventListener("click", () => {
    document.body.style.overflow = initialBodyOverflow;
    modal.remove();
  });

  // append modal to body
  document.body.appendChild(modal);
}
