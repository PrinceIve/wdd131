const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("product");
  if (productSelect) {
    products.forEach(({ id, name }) => {
      const option = document.createElement("option");
      option.value = id;
      option.textContent = name;
      productSelect.appendChild(option);
    });
  }

  const countMessage = document.getElementById("countMessage");
  if (countMessage) {
    const STORAGE_KEY = "reviewCount";
    let count = Number(localStorage.getItem(STORAGE_KEY)) || 0;
    localStorage.setItem(STORAGE_KEY, ++count);
    countMessage.textContent = `Total reviews submitted this session: ${count}`;
  }
});
