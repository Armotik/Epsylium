console.log("Running JavaScript ...");

fetch("../views/footer.html").then(response => response.text()).then(data => {

  document.querySelector(".footer").innerHTML = data
});

fetch("../views/header.html").then(response => response.text()).then(data => {

  document.querySelector(".header").innerHTML = data
});
