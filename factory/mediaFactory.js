export function mediaFactory(data) {
  const { id, photographerId, title, video, image, likes, date, price } = data;

  function getMediaCard() {
    const article = document.createElement("article");
    article.className = "img-container";
    const linkPicture = document.createElement("a");
    linkPicture.className = "img-link";
    linkPicture.setAttribute("id", `${id}`);
    article.appendChild(linkPicture);
    // créer soit un élément photo ou video
    if (image) {
      const pic = document.createElement("img");
      pic.setAttribute("src", `./Sample Photos/${photographerId}/${image}`);
      pic.setAttribute("alt", `${title}`);
      pic.className = "image";
      pic.dataset.imagesrc = `./Sample Photos/${photographerId}/${image}`;
      linkPicture.appendChild(pic);
    } else if (video) {
      const videotag = document.createElement("video");
      videotag.className = "video";
      videotag.setAttribute("controls", "");
      const source = document.createElement("source");

      source.setAttribute("type", "video/mp4");
      source.setAttribute("src", `./Sample Photos/${photographerId}/${video}`);
      videotag.appendChild(source);
      linkPicture.appendChild(videotag);
    }
    const divDecription = document.createElement("div");
    divDecription.className = "img-description-container";
    article.appendChild(divDecription);
    const titleMedia = document.createElement("h3");
    titleMedia.className = "img-title";
    titleMedia.textContent = title;
    divDecription.appendChild(titleMedia);
    const divHeart = document.createElement("div");
    divHeart.className = "heart-container";
    divHeart.addEventListener("click", () => {
      const likes = heart.parentElement.querySelector(".number-likes");
      if (heart.classList.contains("clicked")) {
        likes.innerHTML = parseInt(likes.innerHTML) - 1;
        heart.classList.remove("clicked");
      } else {
        likes.innerHTML = parseInt(likes.innerHTML) + 1;
        heart.classList.add("clicked");
      }
      getTotalLikes();
    });
    divDecription.appendChild(divHeart);
    const numberLikes = document.createElement("span");
    numberLikes.className = "number-likes";
    numberLikes.textContent = likes;
    divHeart.appendChild(numberLikes);
    const heart = document.createElement("i");
    heart.className = "fas fa-heart";
    divHeart.appendChild(heart);

    // obtenir le nombre total de like
    function getTotalLikes() {
      const totalLikeSpan = document.querySelectorAll(".number-likes");
      let totalLikes = 0;
      totalLikeSpan.forEach((likes) => {
        totalLikes += parseInt(likes.innerHTML);
        const likeCounter = document.querySelector(".total-likes");
        likeCounter.innerHTML = `<span class="total-likes">
              ${totalLikes} <i class="fas fa-heart"></i>
            </span>`;
      });
    }
    getTotalLikes();

    return article;
  }
  return { getMediaCard };
}
