class Lightbox {
  static init() {
    const gallerySection = document.querySelector(".section-photo-container");
    // const links = document.querySelectorAll(".img-link");
    const links = Array.from(
      gallerySection.querySelectorAll('img[src$=".jpg"],source[src$=".mp4"]')
    );
    console.log(links);

    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        // séléctionner le lien sue lequel je viens d'appuyer
        new Lightbox(e.currentTarget.getAttribute("src"));
        console.log(e.currentTarget);
      })
    );
    // const links = gallerySection.querySelectorAll(
    //   'img[src$=".jpg"],source[src$=".mp4"]'
    // );
  }

  constructor(url) {
    //   constuire element à partir de l'url
    this.element = this.buildDOM(url);
    document.body.appendChild(this.element);
    // document.addEventListener("keyup", this.oneKeyUp.bind(this));
  }

  //   oneKeyUp(e) {
  //     if (e.key === "escape") {
  //       dom.classList.remove("open");
  //     }
  //   }

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
    });

    return dom;
  }
}
