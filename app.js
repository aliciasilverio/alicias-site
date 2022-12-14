// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});

// Ghost Cursor Effect
// https://github.com/tholman/cursor-effects

window.addEventListener('load', (event) => {
  new cursoreffects.ghostCursor();
});




document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Your code to handle form submission goes here
});


const ScrollReveal = require('scrollreveal');
ScrollReveal().reveal('.A');
ScrollReveal().reveal('.about-me-text');
ScrollReveal().reveal('.projects-h2');