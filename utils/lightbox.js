class Lightbox {
  static init() {
    const gallerySection = document.querySelector(".section-photo-container");
    // const links = document.querySelectorAll(".img-link");
    const links = Array.from(
      gallerySection.querySelectorAll('img[src$=".jpg"],source[src$=".mp4"]')
    );
    const gallery = links.map((link) => link.getAttribute("src"));

    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        // séléctionner le lien sue lequel je viens d'appuyer
        new Lightbox(e.currentTarget.getAttribute("src"), gallery);
        console.log(e.currentTarget);
      })
    );
    // const links = gallerySection.querySelectorAll(
    //   'img[src$=".jpg"],source[src$=".mp4"]'
    // );
  }

  constructor(url, images) {
    //   constuire element à partir de l'url
    this.element = this.buildDOM(url);
    this.images = images;
    this.loadImage(url);
    document.body.appendChild(this.element);
    // document.addEventListener("keyup", this.oneKeyUp.bind(this));
  }

  //   oneKeyUp(e) {
  //     if (e.key === "escape") {
  //       dom.classList.remove("open");
  //     }
  //   }

  loadImage(url) {
    this.url = null;
    const image = new Image();
    this.container = this.element.querySelector(".modal-content");

    this.container.appendChild(image);
    this.url = url;
  }

  buildDOM(url) {
    //   retourner un élément html
    const dom = document.createElement("div");
    dom.className = "modal";
    dom.classList.add("open");
    dom.innerHTML = `<div class="modal-content">
        <button class="close-btn">
          <i class="fas fa-times"></i>
        </button>
        <button class="prev-btn">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="next-btn">
          <i class="fas fa-chevron-right"></i>
        </button>
        <img src="
          ${url}"
          class="main-img"
          alt=""
        />
        <h3 class="image-name">image-name</h3>
      </div>`;
    dom.querySelector(".close-btn").addEventListener("click", (e) => {
      dom.classList.remove("open");
      console.log(this.images.findIndex((i) => i === this.url));
      this.images.findIndex((i) => i === this.url);
    });
    dom.querySelector(".prev-btn").addEventListener("click", (e) => {
      let image = this.images.findIndex((image) => image === this.url);
      this.loadImage(this.images[image - 1]);
      console.log(this.url);
    });
    dom.querySelector(".next-btn").addEventListener("click", (e) => {
      console.log(this.url);
      let image = this.images.findIndex((image) => image === this.url);
      this.loadImage(this.images[image + 1]);
    });

    return dom;
  }
}
