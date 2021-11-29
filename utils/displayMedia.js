const getMedia = async () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlSearchParams.get("id"));
  const data = await getPhotogra();
  const media = data.media;

  const selectedMedia = media.filter((media) => media.photographerId === id);

  return selectedMedia;
};

async function displayMedia() {
  const media = await getMedia();

  media.forEach((element) => {
    const sectionMedia = document.querySelector(".section-photo-container");
    const article = document.createElement("article");
    article.className = "img-container";
    const linkPicture = document.createElement("a");
    linkPicture.className = "img-link";
    article.appendChild(linkPicture);
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
}

displayMedia();

// {/* <article class="img-container">
//   <a href="" class="img-link">
//     <img
//       class="image"
//       src="./Sample Photos/Mimi/Portrait_Background.jpg"
//       alt=""
//     />
//   </a>
//   <div class="img-description-container">
//     <h3 class="img-title">A nice picture</h3>
//     <div class="heart-container">
//       <span class="number-likes">12</span>
//       <i class="fas fa-heart"></i>
//     </div>
//   </div>
// </article>; */}

function mediaFactory(data) {
  const { id, photographerId, image, title, likes, date } = data;
  function getMediaCard() {
    const article = document.createElement("article");
    article.className = "img-container";
    const linkPicture = document.createElement("a");
    linkPicture.className = "img-link";
    const pic = document.createElement("img");
    pic.className = "image";
    pic.setAttribute("src", `./Sample Photos/${id}/${image}`);
    console.log(pic);
    article.appendChild(linkPicture);
    linkPicture.appendChild(image);

    return article;
  }
  return getMediaCard();
}

// console.log(mediaFactory);

// async function displayPictures(media) {
//   const sectionMedia = document.querySelector(".section-photo-container");
//   bananas.forEach((media) => {
//     const showMedia = mediaFactory(banana);
//     const getMediaCard = showMedia.getMediaCard();
//     sectionMedia.appendChild(getMediaCard);
//   });
// }
// displayPictures();

// async function launchPics() {
//   const media = await getMedia();
//   displayPictures(media);
// }

// launchPics();
