console.log("Running JavaScript ...");

document.getElementById("scroll-icon").addEventListener("click", () => {
  window.scrollTo({
    top: document.getElementById("gamemodes-desc").offsetTop,
    behavior: "smooth"
  });
});

document.getElementById("history-stickers").querySelectorAll("img").forEach(e => {

  e.addEventListener("mouseover", figcaptionEvent);
  e.addEventListener("mouseover", setMainImage);
})

function figcaptionEvent() {

  document.getElementById("history-main-img-title").innerHTML = this.getAttribute("alt");
}

function setMainImage() {
  let name = this.getAttribute("src").split("/")[2];
  document.getElementById("history-main-img").setAttribute("src", `../img/gallery/${name}`);

}
