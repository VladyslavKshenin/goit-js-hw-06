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

// Створюємо фрагмент для оптимізації додавання багатьох елементів
const fragment = document.createDocumentFragment();

// Перебираємо масив ingredients та створюємо та додаємо кожен елемент в список
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  fragment.appendChild(li);
});

// Додаємо всі елементи разом в список ul#ingredients за одну операцію
ingredientsList.appendChild(fragment);
