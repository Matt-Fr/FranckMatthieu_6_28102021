import { api } from "./api.js";

//faire matcher les infos du photographe avec l'url
export const getPhotographerById = async () => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  const id = parseInt(urlSearchParams.get("id"));

  const data = await api();
  const photographers = data.photographers;
  const selectedPhotograph = photographers.filter(
    (photograph) => photograph.id === id
  );

  return [...selectedPhotograph];
};

//séléctionner les éléments html et insérer les données du photographe
export async function displayPhotographer() {
  const name = document.querySelector(".photograph-name-2");
  const formTitle = document.querySelector(".title-form");
  const city = document.querySelector(".city-2");
  const tagline = document.querySelector(".tagline-2");
  const portrait = document.querySelector(".photograph-img-2");
  const Price = document.querySelector(".price-2");
  const photographer = await getPhotographerById();
  name.textContent = photographer[0].name;
  formTitle.textContent = `Contactez-moi ${photographer[0].name}`;
  city.textContent = `${photographer[0].city}, ${photographer[0].country}`;
  Price.textContent = `${photographer[0].price}€ / jour`;
  tagline.textContent = photographer[0].tagline;
  portrait.setAttribute(
    "src",
    `./Sample Photos/Photographers ID Photos/${photographer[0].portrait}`
  );
}
