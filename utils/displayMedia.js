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
    console.log(element);
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
      video.setAttribute(
        "src",
        `./Sample Photos/${element.photographerId}/${element.video}`
      );
      linkPicture.appendChild(video);
    }

    sectionMedia.appendChild(article);

    console.log(element);
  });
}

displayMedia();

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
