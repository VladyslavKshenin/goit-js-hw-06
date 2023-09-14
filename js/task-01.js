const categoriesList = document.querySelector("#categories");

// Отримуємо всі елементи li.item в списку категорій
const categoryItems = Array.from(categoriesList.children);

// Виводимо кількість категорій в консоль
console.log(`Number of categories: ${categoryItems.length}`);

// Перебираємо кожен елемент li.item
categoryItems.forEach((item) => {
  // Отримуємо текст заголовку (тег <h2>) і кількість елементів (теги <li>) в категорії
  const categoryName = item.firstElementChild.textContent;
  const categoryElements = item.lastElementChild.children.length;
  
  // Виводимо інформацію про категорію в консоль
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});