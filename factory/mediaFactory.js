// export function mediaFactory(data) {
//   const { id, photographerId, title, altText, video, image, likes } = data;

//   function getMediaCard() {
//     const article = document.createElement("article");
//     article.className = "img-container";
//     const linkPicture = document.createElement("a");
//     linkPicture.className = "img-link";
//     linkPicture.setAttribute("id", `${id}`);
//     article.appendChild(linkPicture);
//     // créer soit un élément photo ou video
//     if (image) {
//       const pic = document.createElement("img");
//       pic.setAttribute("src", `./Sample Photos/${photographerId}/${image}`);
//       pic.setAttribute("alt", `${altText}`);
//       pic.setAttribute("title", `${title}`);
//       pic.setAttribute("tabindex", "0");
//       pic.className = "lightbox-media image";
//       pic.dataset.imagesrc = `./Sample Photos/${photographerId}/${image}`;
//       linkPicture.appendChild(pic);
//     } else if (video) {
//       const videotag = document.createElement("video");
//       videotag.className = "lightbox-media video";
//       const source = document.createElement("source");
//       source.setAttribute("type", "video/mp4");
//       source.setAttribute("src", `./Sample Photos/${photographerId}/${video}`);
//       videotag.dataset.imagesrc = `./Sample Photos/${photographerId}/${video}`;
//       videotag.setAttribute("alt", `${altText}`);
//       videotag.setAttribute("title", `${title}`);
//       videotag.setAttribute("tabindex", "0");
//       videotag.appendChild(source);
//       linkPicture.appendChild(videotag);
//     }
//     const divDecription = document.createElement("div");
//     divDecription.className = "img-description-container";
//     article.appendChild(divDecription);
//     const titleMedia = document.createElement("h3");
//     titleMedia.className = "img-title";
//     titleMedia.textContent = title;
//     titleMedia.setAttribute("tabindex", "0");
//     divDecription.appendChild(titleMedia);
//     const divHeart = document.createElement("div");
//     divHeart.className = "heart-container";
//     divHeart.setAttribute(
//       "aria-label",
//       "clickez pour ajouter un like à l'image"
//     );
//     divHeart.setAttribute("tabindex", "0");

//     divDecription.appendChild(divHeart);
//     const numberLikes = document.createElement("span");
//     numberLikes.className = "number-likes";
//     numberLikes.textContent = likes;
//     divHeart.appendChild(numberLikes);
//     divHeart.setAttribute("data-id", id);
//     const heart = document.createElement("i");
//     heart.className = "fas fa-heart";
//     divHeart.appendChild(heart);

//     return article;
//   }
//   return { getMediaCard };
// }

export function mediaFactory(data) {
  const { image } = data;

  if (image) {
    return createImg(data);
  } else return createVideo(data);
}

function createImg(data) {
  const { id, photographerId, title, altText, image, likes } = data;
  const article = document.createElement("article");
  article.className = "img-container";
  const linkPicture = document.createElement("a");
  linkPicture.className = "img-link";
  linkPicture.setAttribute("id", `${id}`);
  article.appendChild(linkPicture);
  const pic = document.createElement("img");
  pic.setAttribute("src", `./Sample Photos/${photographerId}/${image}`);
  pic.setAttribute("alt", `${altText}`);
  pic.setAttribute("title", `${title}`);
  pic.setAttribute("tabindex", "0");
  pic.className = "lightbox-media image";
  pic.dataset.imagesrc = `./Sample Photos/${photographerId}/${image}`;
  linkPicture.appendChild(pic);
  const divDecription = document.createElement("div");
  divDecription.className = "img-description-container";
  article.appendChild(divDecription);
  const titleMedia = document.createElement("h3");
  titleMedia.className = "img-title";
  titleMedia.textContent = title;
  titleMedia.setAttribute("tabindex", "0");
  divDecription.appendChild(titleMedia);
  const divHeart = document.createElement("div");
  divHeart.className = "heart-container";
  divHeart.setAttribute("aria-label", "clickez pour ajouter un like à l'image");
  divHeart.setAttribute("tabindex", "0");
  divDecription.appendChild(divHeart);
  const numberLikes = document.createElement("span");
  numberLikes.className = "number-likes";
  numberLikes.textContent = likes;
  divHeart.appendChild(numberLikes);
  divHeart.setAttribute("data-id", id);
  const heart = document.createElement("i");
  heart.className = "fas fa-heart";
  divHeart.appendChild(heart);

  return article;
}

function createVideo(data) {
  const { id, photographerId, title, altText, video, likes } = data;
  const article = document.createElement("article");
  article.className = "img-container";
  const linkPicture = document.createElement("a");
  linkPicture.className = "img-link";
  linkPicture.setAttribute("id", `${id}`);
  article.appendChild(linkPicture);
  const videotag = document.createElement("video");
  videotag.className = "lightbox-media video";
  const source = document.createElement("source");
  source.setAttribute("type", "video/mp4");
  source.setAttribute("src", `./Sample Photos/${photographerId}/${video}`);
  videotag.dataset.imagesrc = `./Sample Photos/${photographerId}/${video}`;
  videotag.setAttribute("alt", `${altText}`);
  videotag.setAttribute("title", `${title}`);
  videotag.setAttribute("tabindex", "0");
  videotag.appendChild(source);
  linkPicture.appendChild(videotag);
  const divDecription = document.createElement("div");
  divDecription.className = "img-description-container";
  article.appendChild(divDecription);
  const titleMedia = document.createElement("h3");
  titleMedia.className = "img-title";
  titleMedia.textContent = title;
  titleMedia.setAttribute("tabindex", "0");
  divDecription.appendChild(titleMedia);
  const divHeart = document.createElement("div");
  divHeart.className = "heart-container";
  divHeart.setAttribute("aria-label", "clickez pour ajouter un like à l'image");
  divHeart.setAttribute("tabindex", "0");
  divDecription.appendChild(divHeart);
  const numberLikes = document.createElement("span");
  numberLikes.className = "number-likes";
  numberLikes.textContent = likes;
  divHeart.appendChild(numberLikes);
  divHeart.setAttribute("data-id", id);
  const heart = document.createElement("i");
  heart.className = "fas fa-heart";
  divHeart.appendChild(heart);

  return article;
}
