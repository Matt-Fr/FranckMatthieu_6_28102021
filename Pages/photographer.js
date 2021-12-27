import { api } from "../api.js";
import {
  displayPhotographer,
  getPhotographerById,
} from "../displayPhotographer.js";

import { getMedia } from "../getMedia.js";

import { mediaFactory } from "../factory/mediaFactory.js";
import { displayMedia } from "../displayMedia.js";
import { contactForm } from "./contactForm.js";

//display le photographe et ses infos sur la page photograph.html
displayPhotographer();

async function init() {
  // Récupère les datas des media
  const media = await getMedia();
  displayMedia(media);
  const select = document.querySelector("#criteria");
  select.addEventListener("change", function (e) {
    const sortType = e.target.value;
    displayMedia(media, sortType);
  });
}

init();

contactForm();
