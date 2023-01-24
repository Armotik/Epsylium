console.log("Running JavaScript ...");

document.getElementById("scroll-icon").addEventListener("click", () => {
  window.scrollTo({
    top: document.getElementById("gamemodes-desc").offsetTop,
    behavior: "smooth"
  });
});
