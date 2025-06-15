// scripts/script.js

const dishes = [
  { 
    name: 'Suya', 
    description: 'Spicy grilled meat skewers coated with ground peanuts and spices.', 
    image: 'images/nigerian-suya-32.jpg', 
    vendor: 'Galaxy Grill, 12 Market Road, Lagos' 
  },
  { 
    name: 'Puff-Puff', 
    description: 'Soft, deep-fried sweet dough balls dusted with sugar.', 
    image: 'images/easy-puff-puff.jpg', 
    vendor: 'Sweet Bites Corner, 45 Foodie Lane, Abuja' 
  },
  { 
    name: 'Akara', 
    description: 'Golden black-eyed pea fritters, crispy outside and fluffy inside.', 
    image: 'images/akara.webp', 
    vendor: 'Mama Nkechi’s Stall, 78 Osbourne Street, Port Harcourt' 
  },
  { 
    name: 'Boli', 
    description: 'Roasted plantain served with spicy groundnut sauce.', 
    image: 'images/bole.jpeg', 
    vendor: 'Boli Express, 22 Waterfront Drive, Calabar' 
  },
  { 
    name: 'Moi-Moi', 
    description: 'Steamed bean pudding made from blended black-eyed peas and spices.', 
    image: 'images/Moi-Moi-Leaf.webp', 
    vendor: 'Hand of God Canteen, 99 Freedom Avenue, Ibadan' 
  },
  { 
    name: 'Eggroll', 
    description: 'Crispy pastry filled with egg, vegetables, and spices.', 
    image: 'images/eggroll.jpeg', 
    vendor: 'Roll & Bite, 18 Unity Road, Enugu' 
  }
];

window.addEventListener('DOMContentLoaded', () => {
  const dishOfDayContainer = document.getElementById('dishOfDay');
  const newDishBtn = document.getElementById('newDishBtn');

  function displayRandomDish() {
    const randomDish = dishes[Math.floor(Math.random() * dishes.length)];
    dishOfDayContainer.innerHTML = `
      <img src="${randomDish.image}" alt="${randomDish.name}" loading="lazy">
      <h3>${randomDish.name}</h3>
      <p>${randomDish.description}</p>
      <p class="vendor"><strong>Vendor:</strong> ${randomDish.vendor}</p>
    `;
  }

 
  if (dishOfDayContainer && newDishBtn) {
    newDishBtn.addEventListener('click', displayRandomDish);
    displayRandomDish(); 
  } else {
    console.error('Dish of the Day elements not found in the DOM.');
  }
});
