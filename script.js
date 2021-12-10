//DROP DOWN MENU --->
// function that makes a dropdown menu out of a nodelist and its container
function dropMenuDown(nodes, nodesContainer) {
  if ((nodesContainer.style.display = "none")) {
    nodesContainer.style.display = "flex";
  }
  const elements = Array.from(nodes);

  elements.forEach((element) => (element.style.display = "flex"));
  nodesContainer.addEventListener("mouseleave", () => {
    nodesContainer.style.display = "none";
  });
}

const services = document.getElementsByClassName("service");
const servicesContainer = document.getElementById("services-list");
servicesContainer.classList.add("list");
const servicesCol = document.getElementsByClassName("services");
const servicesBtn = servicesCol[0];
servicesBtn.addEventListener("mouseover", () => {
  dropMenuDown(services, servicesContainer);
});

const productsContainer = document.getElementById("products-list");
productsContainer.classList.add("list");
const products = document.getElementsByClassName("product");
const productsColl = document.getElementsByClassName("products");
const productsBtn = productsColl[0];
productsBtn.addEventListener("mouseover", () => {
  dropMenuDown(products, productsContainer);
});

// IMG CAROUSEL LOGIC --->

const imgs = Array.from(document.getElementsByClassName("img"));
const next = document.querySelector("#next");
imgs.forEach((image) => {
  image.classList.add("hidden");
});

let slideIndex = 1;
imgs[0].classList.remove("hidden");
imgs[0].classList.add("shown");
function nextImg(n) {
  for (let i = 0; i <= imgs.length - 1; i++) {
    if (imgs[i].classList.contains("hidden")) {
      continue;
    }
    imgs[i].classList.add("hidden");
    imgs[i].classList.remove("shown");
  }
  imgs[n - 1].classList.remove("hidden");
  imgs[n - 1].classList.add("shown");
}

next.addEventListener("click", () => {
  if (slideIndex > imgs.length) {
    slideIndex = 1;
  }
  nextImg(slideIndex);
  slideIndex += 1;
  console.log(slideIndex);
});
