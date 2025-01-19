const currentYear = document.querySelector("#current-year");

const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.innerHTML = `Last modified: ${document.lastModified}.`;


// Hamburger menu functionality
const nav = document.querySelector("nav ul");
const hamburgerButton = document.querySelector(".hamburger");

hamburgerButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamburgerButton.textContent = nav.classList.contains("open") ? "✖" : "☰";
});
