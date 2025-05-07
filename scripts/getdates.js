const currentYear = document.querySelector("#current-year");
const today = new Date();
currentYear.textContent = today.getFullYear();

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.textContent = `Last modified: ${document.lastModified}.`;
