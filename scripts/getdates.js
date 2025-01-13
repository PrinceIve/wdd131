const currentYear = document.querySelector("#current-year");

const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.innerHTML = `Last modified: ${document.lastModified}.`;
