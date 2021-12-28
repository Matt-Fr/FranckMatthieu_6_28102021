export function photographerFactory(data) {
  const { name, id, portrait, city, tagline, price } = data;

  const picture = `Sample Photos/Photographers ID Photos/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    article.className = "photograph";
    const link = document.createElement("a");
    link.className = "photograph-link";
    link.href = `./photograph.html?id=${id}`;

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.className = "photograph-img";
    img.setAttribute("alt", `${name}`);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.className = "photograph-name";

    const divInfo = document.createElement("div");
    divInfo.className = "information-container";
    const parCity = document.createElement("p");
    parCity.className = "city";
    parCity.textContent = city;

    const parTagline = document.createElement("p");
    parTagline.className = "tagline";
    parTagline.textContent = tagline;

    const parPrice = document.createElement("p");
    parPrice.className = "price";
    parPrice.innerHTML = `${price}€/jour`;

    const divTag = document.createElement("div");
    divTag.className = "photograph-tag-container";

    article.appendChild(link);
    link.appendChild(img);
    link.appendChild(h2);
    article.appendChild(divInfo);
    divInfo.appendChild(parCity);
    divInfo.appendChild(parTagline);
    divInfo.appendChild(parPrice);

    return article;
  }
  return { name, id, city, tagline, price, picture, getUserCardDOM };
}
