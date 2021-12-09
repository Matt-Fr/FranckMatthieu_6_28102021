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
// async function displayMedia() {
//   const media = await getMedia();

//   media.forEach((element) => {
//     const sectionMedia = document.querySelector(".section-photo-container");
//     const article = document.createElement("article");
//     article.className = "img-container";
//     const linkPicture = document.createElement("a");
//     linkPicture.className = "img-link";
//     article.appendChild(linkPicture);
//     //créer soit un élément photo ou video
//     if (element.image) {
//       const pic = document.createElement("img");
//       pic.setAttribute(
//         "src",
//         `./Sample Photos/${element.photographerId}/${element.image}`
//       );
//       pic.className = "image";
//       linkPicture.appendChild(pic);
//     } else if (element.video) {
//       const video = document.createElement("video");
//       video.className = "video";
//       video.setAttribute("type", "video/mp4");
//       video.setAttribute(
//         "src",
//         `./Sample Photos/${element.photographerId}/${element.video}`
//       );
//       linkPicture.appendChild(video);
//     }
//     const divDecription = document.createElement("div");
//     divDecription.className = "img-description-container";
//     article.appendChild(divDecription);
//     const titleMedia = document.createElement("h3");
//     titleMedia.className = "img-title";
//     titleMedia.textContent = element.title;
//     divDecription.appendChild(titleMedia);
//     const divHeart = document.createElement("div");
//     divHeart.className = "heart-container";
//     divDecription.appendChild(divHeart);
//     const numberLikes = document.createElement("span");
//     numberLikes.className = "number-likes";
//     numberLikes.textContent = element.likes;
//     divHeart.appendChild(numberLikes);
//     const heart = document.createElement("i");
//     heart.className = "fas fa-heart";
//     divHeart.appendChild(heart);
//     sectionMedia.appendChild(article);
//   });

//   //obtenir le nombre total de like
//   function getTotalLikes() {
//     const totalLikeSpan = document.querySelectorAll(".number-likes");
//     let totalLikes = 0;
//     totalLikeSpan.forEach((likes) => {
//       totalLikes += parseInt(likes.innerHTML);
//       const likeCounter = document.querySelector(".total-likes");
//       likeCounter.innerHTML = `<span class="total-likes">
//           ${totalLikes} <i class="fas fa-heart"></i>
//         </span>`;
//     });
//   }
//   getTotalLikes();
//   const hearts = document.querySelectorAll(".heart-container");

//   //incrémenter like quand le coeur est clické
//   hearts.forEach((heart) => {
//     heart.addEventListener("click", () => {
//       const likes = heart.parentElement.querySelector(".number-likes");
//       if (heart.classList.contains("clicked")) {
//         likes.innerHTML = parseInt(likes.innerHTML) - 1;
//         heart.classList.remove("clicked");
//       } else {
//         likes.innerHTML = parseInt(likes.innerHTML) + 1;
//         heart.classList.add("clicked");
//       }
//       getTotalLikes();
//     });
//   });

//   console.log(media);
//   for (let key of media) {
//     console.log(key.likes);
//   }
//   console.log(
//     media.sort((a, b) => (a.likes > b.likes ? 1 : b.likes > a.likes ? -1 : 0))
//   );
// }

// displayMedia();

//
//
//
//
//
//
//

function mediaFactory(data) {
  const { id, photographerId, title, video, image, likes, date, price } = data;

  function getMediaCard() {
    const sectionMedia = document.querySelector(".section-photo-container");
    const article = document.createElement("article");
    article.className = "img-container";
    const linkPicture = document.createElement("a");
    linkPicture.className = "img-link";
    article.appendChild(linkPicture);
    // créer soit un élément photo ou video
    if (image) {
      const pic = document.createElement("img");
      pic.setAttribute("src", `./Sample Photos/${photographerId}/${image}`);
      pic.className = "image";
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
    const hearts = document.querySelectorAll(".heart-container");

    //   //incrémenter like quand le coeur est clické
    // hearts.forEach((heart) => {
    //   heart.addEventListener("click", () => {
    //     const likes = heart.parentElement.querySelector(".number-likes");
    //     if (heart.classList.contains("clicked")) {
    //       likes.innerHTML = parseInt(likes.innerHTML) - 1;
    //       heart.classList.remove("clicked");
    //     } else {
    //       likes.innerHTML = parseInt(likes.innerHTML) + 1;
    //       heart.classList.add("clicked");
    //     }
    //     getTotalLikes();
    //   });
    // });
    return article;
  }
  return { getMediaCard };
}

// obtenir le nombre total de like
// function getTotalLikes() {
//   const totalLikeSpan = document.querySelectorAll(".number-likes");
//   let totalLikes = 0;
//   totalLikeSpan.forEach((likes) => {
//     totalLikes += parseInt(likes.innerHTML);
//   });
//   return totalLikes;
// }

// function displayTotalLikes() {
//   const totalLikes = getTotalLikes();
//   const likeCounter = document.querySelector(".total-likes");
//   likeCounter.innerHTML = `<span class="total-likes">
//            ${totalLikes} <i class="fas fa-heart"></i>
//         </span>`;
// }

// function heartListener() {
//   const hearts = document.querySelectorAll(".heart-container");

//   hearts.forEach((heart) => {
//     heart.addEventListener("click", () => {
//       const likes = heart.parentElement.querySelector(".number-likes");
//       if (heart.classList.contains("clicked")) {
//         likes.innerHTML = parseInt(likes.innerHTML) - 1;
//         heart.classList.remove("clicked");
//       } else {
//         likes.innerHTML = parseInt(likes.innerHTML) + 1;
//         heart.classList.add("clicked");
//       }
//     });
//   });
// }

// const hearts = document.querySelectorAll(".heart-container");

// //   //incrémenter like quand le coeur est clické
// //   hearts.forEach((heart) => {
// //     heart.addEventListener("click", () => {
// //       const likes = heart.parentElement.querySelector(".number-likes");
// //       if (heart.classList.contains("clicked")) {
// //         likes.innerHTML = parseInt(likes.innerHTML) - 1;
// //         heart.classList.remove("clicked");
// //       } else {
// //         likes.innerHTML = parseInt(likes.innerHTML) + 1;
// //         heart.classList.add("clicked");
// //       }
// //       getTotalLikes();
// //     });
// //   });

async function displayMedia(medias, sortType = "likes") {
  const sectionMedia = document.querySelector(".section-photo-container");
  const select = document.querySelector("#criteria");

  const sortedMedias = [...medias];

  sortedMedias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const cardMedia = mediaModel.getMediaCard();
    sectionMedia.appendChild(cardMedia);
  });
  select.addEventListener("change", function (e) {
    sortType = e.target.value;
    console.log(sortType);
    console.log(sortedMedias);

    switch (sortType) {
      case "likes":
        sortedMedias.sort((a, b) => b.likes - a.likes);
        break;

      case "date":
        sortedMedias.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        break;

      case "title":
        // sortedMedias.sort((a, b) => a.title.localeCompare(b.title));
        sortedMedias.sort(function (a, b) {
          return a.title === b.title ? 0 : a.title < b.title ? -1 : 1;
        });
        break;

      default:
        sortedMedias.sort((a, b) => b.likes - a.likes);
        break;
    }
    sectionMedia.innerHTML = "";
    sortedMedias.forEach((media) => {
      const mediaModel = mediaFactory(media);
      const cardMedia = mediaModel.getMediaCard();
      sectionMedia.appendChild(cardMedia);
    });
  });
}

async function initi() {
  // Récupère les datas des media
  const media = await getMedia();
  displayMedia(media);
  Lightbox.init();
}

initi();
