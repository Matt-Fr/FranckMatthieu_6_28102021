import { mediaFactory } from "./factory/mediaFactory.js";

//display media selon l'option séléctionnée
export async function displayMedia(medias, sortType = "likes") {
  const sectionMedia = document.querySelector(".section-photo-container");
  const select = document.querySelector("#criteria");

  const sortedMedias = [...medias];
  sortedMedias.sort((a, b) => b.likes - a.likes);
  sortedMedias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const cardMedia = mediaModel.getMediaCard();
    sectionMedia.appendChild(cardMedia);
  });
  select.addEventListener("change", function (e) {
    sortType = e.target.value;

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
  });
}
