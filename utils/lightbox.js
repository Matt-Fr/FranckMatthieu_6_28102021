class Lightbox {
  static init() {
    const gallerySection = document.querySelector(".section-photo-container");

    const links = Array.from(
      gallerySection.querySelectorAll('img[src$=".jpg"],source[src$=".mp4"]')
    );
    const gallery = links.map((link) => link.getAttribute("src"));
    console.log(gallery);
  }
}
