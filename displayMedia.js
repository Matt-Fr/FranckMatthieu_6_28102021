import { mediaFactory } from "./factory/mediaFactory.js";

//display media selon l'option séléctionnée
export async function displayMedia(medias, sortType = "likes") {
  const sectionMedia = document.querySelector(".section-photo-container");

  const sortedMedias = [...medias];

  switch (sortType) {
    case "likes":
      sortedMedias.sort((a, b) => b.likes - a.likes);
      break;

    case "date":
      sortedMedias.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      break;

    case "title":
      // sortedMedias.sort((a, b) => a.title.localeCompare(b.title));
      sortedMedias.sort(function (a, b) {
        return a.title === b.title ? 0 : a.title < b.title ? -1 : 1;
      });
      break;

    default:
      sortedMedias.sort((a, b) => b.likes - a.likes);
      break;
  }
  sectionMedia.innerHTML = "";
  sortedMedias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const cardMedia = mediaModel.getMediaCard();
    sectionMedia.appendChild(cardMedia);
  });

  // Lightbox

  const lightbox = document.querySelector(".modal");
  const lightboxBtns = document.querySelectorAll(".lightbox-btns");
  const btnNext = document.querySelector("#next");
  const btnprev = document.querySelector("#prev");
  const images = document.querySelectorAll(".image");
  const arrayImages = Array.from(images);
  const lastImage = arrayImages.length - 1;
  const lightboxImg = document.querySelector(".main-img");
  const closeBtn = document.querySelector(".close-btn");
  const lightboxTitle = document.querySelector(".image-name");
  let activeImage;
  console.log(arrayImages);

  //function

  const showLightbox = () => {
    lightbox.classList.add("open");
  };

  const hideLightbox = () => {
    lightbox.classList.remove("open");
  };

  const setActiveImage = (selectedImage) => {
    console.log(selectedImage);
    lightboxImg.src = selectedImage.dataset.imagesrc;
    lightboxTitle.innerHTML = selectedImage.alt;
    activeImage = arrayImages.indexOf(selectedImage);
  };

  const transitionSlideLeft = () => {
    console.log("left");
    btnprev.focus();
    activeImage === 0
      ? setActiveImage(arrayImages[lastImage])
      : setActiveImage(arrayImages[activeImage - 1]);
  };
  const transitionSlideRight = () => {
    btnNext.focus();
    activeImage === lastImage
      ? setActiveImage(arrayImages[0])
      : setActiveImage(arrayImages[activeImage + 1]);
  };

  const transitionSlideHandler = (moveItem) => {
    moveItem.includes("prev") ? transitionSlideLeft() : transitionSlideRight();
  };
  //eventListener

  images.forEach((image) => {
    image.addEventListener("click", (e) => {
      showLightbox();
      setActiveImage(image);
    });
  });

  closeBtn.addEventListener("click", hideLightbox);
  lightbox.addEventListener("click", hideLightbox);

  lightboxBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      transitionSlideHandler(e.currentTarget.id);
    })
  );

  //end lightbox
}
