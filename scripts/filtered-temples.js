// scripts/filtered-temples.js

document.addEventListener("DOMContentLoaded", () => {
  // Year & Last Modified
  document.querySelector("#current-year").textContent = new Date().getFullYear();
  document.querySelector("#lastModified").textContent = `Last modified: ${document.lastModified}.`;

  // Hamburger toggle
  const navUl = document.querySelector("nav ul");
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", () => {
    navUl.classList.toggle("open");
    hamburger.textContent = navUl.classList.contains("open") ? "✖" : "☰";
  });

  // Temple data
  const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-5154-thumb.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10-12",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3545-thumb.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27-29",
    area: 53997,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-thumb.jpg"
  }
];

  const gallery = document.querySelector(".temples-gallery");
  const filterTitle = document.querySelector("#filter-title");

  function displayTemples(list) {
    gallery.innerHTML = "";
    list.forEach(t => {
      const card = document.createElement("div");
      card.className = "temple-card";
      card.innerHTML = `
        <h3>${t.templeName}</h3>
        <p>Location: ${t.location || "—"}</p>
        <p>Dedicated: ${t.dedicated}</p>
        <p>Area: ${t.area.toLocaleString()} sq ft</p>
        <img src="${t.imageUrl}" alt="${t.templeName}" />
      `;
      gallery.appendChild(card);
    });
  }

  // initial load
  displayTemples(temples);

  // nav filtering
  document.querySelectorAll("nav a[data-filter]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const mode = link.dataset.filter;
      filterTitle.textContent = link.textContent;
      let result;
      switch(mode) {
        case "old":
          result = temples.filter(t => parseInt(t.dedicated) < 1900);
          break;
        case "new":
          result = temples.filter(t => parseInt(t.dedicated) > 2000);
          break;
        case "large":
          result = temples.filter(t => t.area > 90000);
          break;
        case "small":
          result = temples.filter(t => t.area < 10000);
          break;
        default:
          result = temples;
      }
      displayTemples(result);
      navUl.classList.remove("open");
      hamburger.textContent = "☰";
    });
  });
});
