// MGI Telecom Website
// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Sticky Header Shadow
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (header) {
    if (window.scrollY > 50) {
      header.classList.add("shadow");
    } else {
      header.classList.remove("shadow");
    }
  }
});

// Footer Year
const year = document.getElementById("year");
if (year) {
  year.innerHTML = new Date().getFullYear();
}
// Hide Loader
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
});
