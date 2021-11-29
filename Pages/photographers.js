const getPhotogra = async () => {
  const response = await fetch("./photographers.json");

  const json = await response.json();

  return json;
};
getPhotogra();

const ini = async () => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  const id = parseInt(urlSearchParams.get("id"));

  const data = await getPhotogra();
  const photographers = data.photographers;
  const selectedPhotograph = photographers.filter(
    (photograph) => photograph.id === id
  );

  return [...selectedPhotograph];
};

ini();

async function displayinfo() {
  const name = document.querySelector(".photograph-name-2");
  const formTitle = document.querySelector(".title-form");
  const city = document.querySelector(".city-2");
  const tagline = document.querySelector(".tagline-2");
  const portrait = document.querySelector(".photograph-img-2");
  const Price = document.querySelector(".price-2");
  const photographer = await ini();
  name.textContent = photographer[0].name;
  formTitle.textContent = `Contactez-moi ${photographer[0].name}`;
  city.textContent = `${photographer[0].city}, ${photographer[0].country}`;
  Price.textContent = `${photographer[0].price}€ / jour`;
  tagline.textContent = photographer[0].tagline;
  portrait.setAttribute(
    "src",
    `./Sample Photos/Photographers ID Photos/${photographer[0].portrait}`
  );

  //display media
  const sectionMedia = document.querySelector(".section-photo-container");
}

displayinfo();

// async function displayData(photographers) {
//   const photographersSection = document.querySelector(
//     ".photograph-container"
//   );

//   photographers.forEach((photographer) => {
//     const photographerModel = photographerFactory(photographer);
//     const userCardDOM = photographerModel.getUserCardDOM();
//     photographersSection.appendChild(userCardDOM);
//   });
// }

// async function init() {
//   // Récupère les datas des photographes
//   const { photographers } = await getPhotographers();
//   displayData(photographers);
// }

// init();

// lightbox
