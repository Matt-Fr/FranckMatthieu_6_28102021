const photographers = [
  {
    name: "Mimi Keel",
    id: 243,
    city: "London",
    country: "UK",
    tags: ["portrait", "events", "travel", "animals"],
    tagline: "Voir le beau dans le quotidien",
    price: 400,
    portrait: "MimiKeel.jpg",
  },
  {
    name: "Ellie-Rose Wilkens",
    id: 930,
    city: "Paris",
    country: "France",
    tags: ["sports", "architecture"],
    tagline: "Capturer des compositions complexes",
    price: 250,
    portrait: "EllieRoseWilkens.jpg",
  },
  {
    name: "Tracy Galindo",
    id: 82,
    city: "Montreal",
    country: "Canada",
    tags: ["art", "fashion", "events"],
    tagline: "Photographe freelance",
    price: 500,
    portrait: "TracyGalindo.jpg",
  },
  {
    name: "Nabeel Bradford",
    id: 527,
    city: "Mexico City",
    country: "Mexico",
    tags: ["travel", "portrait"],
    tagline: "Toujours aller de l'avant",
    price: 350,
    portrait: "NabeelBradford.jpg",
  },
  {
    name: "Rhode Dubois",
    id: 925,
    city: "Barcelona",
    country: "Spain",
    tags: ["sport", "fashion", "events", "animals"],
    tagline: "Je crée des souvenirs",
    price: 275,
    portrait: "RhodeDubois.jpg",
  },
  {
    name: "Marcel Nikolic",
    id: 195,
    city: "Berlin",
    country: "Germany",
    tags: ["travel", "architecture"],
    tagline: "Toujours à la recherche de LA photo",
    price: 300,
    portrait: "MarcelNikolic.jpg",
  },
];

fetch("./photographers.json")
  .then((response) => response.json())
  .then((data) => console.log(data.photographers))
  .catch((error) => console.log(error));

const section = document.querySelector(".photograph-container");

window.addEventListener("DOMContentLoaded", function () {
  let displayPhotographer = photographers.map(function (item) {
    return `<article class="photograph">
        <a href="" class="photograph-link">
          <img
            src="./Sample Photos/Photographers ID Photos/${item.portrait}"
            alt=""
            class="photograph-img"
          />
          <h2 class="photograph-name">${item.name}</h2>
        </a>
        <div class="information-container">
          <p class="city">${item.city},${item.country}</p>
          <p class="tagline">${item.tagline}</p>
          <p class="price">${item.price}€/jour</p>
        </div>
        <div class="photograph-tag-container">
          <button class="tag">#Sometag</button>
          <button class="tag">#Sometag</button>
          <button class="tag">#Sometag</button>
          <button class="tag">#Sometag</button>
        </div>
      </article>`;
  });
  displayPhotographer = displayPhotographer.join("");
  section.innerHTML = displayPhotographer;
});
