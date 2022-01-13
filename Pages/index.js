import { photographerFactory } from "../factory/photographer.js";

//récupérer les données des photographes
async function getPhotographers() {
  const response = await fetch("./photographers.json");
  const data = await response.json();
  const photographers = data.photographers;

  return {
    photographers: [...photographers],
  };
}

//créer une carte pour chaque photographe avec la factory
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photograph-container");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
