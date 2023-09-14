const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Отримуємо доступ до списку ul#ingredients
const ingredientsList = document.querySelector("#ingredients");

const ingredientsHTML = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`).join("");

ingredientsList.innerHTML = ingredientsHTML;
