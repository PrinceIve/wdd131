const dishes = [
  { id: 'suya', name: 'Suya', image: 'images/suya.webp' },
  { id: 'puffpuff', name: 'Puff-Puff', image: 'images/puff-puff.webp' },
  { id: 'akara', name: 'Akara', image: 'images/akara.webp' }
];

function renderDishes() {
  const container = document.getElementById('dishes-list');
  container.innerHTML = dishes.map(dish => `
    <div class="dish-card">
      <img src="${dish.image}" alt="${dish.name}" loading="lazy">
      <h3>${dish.name}</h3>
      <div class="star-rating" data-id="${dish.id}">
        ${[5,4,3,2,1].map(n => `
          <input type="radio" id="${dish.id}-star-${n}" name="rating-${dish.id}" value="${n}" />
          <label for="${dish.id}-star-${n}">☆</label>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function loadRatings() {
  dishes.forEach(dish => {
    const saved = localStorage.getItem(`rating-${dish.id}`);
    if (saved) {
      const input = document.getElementById(`${dish.id}-star-${saved}`);
      if (input) input.checked = true;
    }
  });
}

function handleRating(e) {
  if (!e.target.matches('.star-rating input')) return;
  const id = e.target.closest('.star-rating').dataset.id;
  const value = e.target.value;
  localStorage.setItem(`rating-${id}`, value);
}

document.addEventListener('DOMContentLoaded', () => {
  renderDishes();
  loadRatings();
  document.getElementById('dishes-list').addEventListener('change', handleRating);
});
