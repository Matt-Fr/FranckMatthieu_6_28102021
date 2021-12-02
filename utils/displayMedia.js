//obtenir les médias du Json
const getMedia = async () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlSearchParams.get("id"));
  const data = await getPhotogra();
  const media = data.media;

  const selectedMedia = media.filter((media) => media.photographerId === id);

  return selectedMedia;
};

// créer une carte pour chaque média
async function displayMedia() {
  const media = await getMedia();

  media.forEach((element) => {
    const sectionMedia = document.querySelector(".section-photo-container");
    const article = document.createElement("article");
    article.className = "img-container";
    const linkPicture = document.createElement("a");
    linkPicture.className = "img-link";
    article.appendChild(linkPicture);
    //créer soit un élément photo ou video
    if (element.image) {
      const pic = document.createElement("img");
      pic.setAttribute(
        "src",
        `./Sample Photos/${element.photographerId}/${element.image}`
      );
      pic.className = "image";
      linkPicture.appendChild(pic);
    } else if (element.video) {
      const video = document.createElement("video");
      video.className = "video";
      video.setAttribute("type", "video/mp4");
      video.setAttribute(
        "src",
        `./Sample Photos/${element.photographerId}/${element.video}`
      );
      linkPicture.appendChild(video);
    }
    const divDecription = document.createElement("div");
    divDecription.className = "img-description-container";
    article.appendChild(divDecription);
    const titleMedia = document.createElement("h3");
    titleMedia.className = "img-title";
    titleMedia.textContent = element.title;
    divDecription.appendChild(titleMedia);
    const divHeart = document.createElement("div");
    divHeart.className = "heart-container";
    divDecription.appendChild(divHeart);
    const numberLikes = document.createElement("span");
    numberLikes.className = "number-likes";
    numberLikes.textContent = element.likes;
    divHeart.appendChild(numberLikes);
    const heart = document.createElement("i");
    heart.className = "fas fa-heart";
    divHeart.appendChild(heart);
    sectionMedia.appendChild(article);
  });

  //obtenir le nombre total de like
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
  const hearts = document.querySelectorAll(".heart-container");

  //incrémenter like quand le coeur est clické
  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
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
  });

  console.log(media);
  for (let key of media) {
    console.log(key.likes);
  }
  console.log(
    media.sort((a, b) => (a.likes > b.likes ? 1 : b.likes > a.likes ? -1 : 0))
  );
}

displayMedia();

// function mediaFactory(data) {
//   const { id, photographerId, image, title, likes, date } = data;
//   function getMediaCard() {
//     const article = document.createElement("article");
//     article.className = "img-container";
//     const linkPicture = document.createElement("a");
//     linkPicture.className = "img-link";
//     const pic = document.createElement("img");
//     pic.className = "image";
//     pic.setAttribute("src", `./Sample Photos/${id}/${image}`);
//     console.log(pic);
//     article.appendChild(linkPicture);
//     linkPicture.appendChild(image);

//     return article;
//   }
//   return getMediaCard();
// }
