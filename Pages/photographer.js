import { displayPhotographer } from "../displayPhotographer.js";
import { getMedia } from "../getMedia.js";
import { displayMedia } from "../displayMedia.js";
import { contactForm } from "../contactForm.js";

//display le photographe et ses infos sur la page du photographe
displayPhotographer();

async function init() {
  // Récupère les datas des media
  const media = await getMedia();
  displayMedia(media);
  const select = document.querySelector("#criteria");
  //change le tri grace au select
  select.addEventListener("change", function (e) {
    const sortType = e.target.value;
    displayMedia(media, sortType);
  });
}

init();

contactForm();
