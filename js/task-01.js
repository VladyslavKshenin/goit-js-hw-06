const categoriesList = document.querySelector("#categories");

// Отримуємо всі елементи li.item в списку категорій
const categoryItems = categoriesList.querySelectorAll("li.item");

// Виводимо кількість категорій в консоль
console.log(`Number of categories: ${categoryItems.length}`);

// Перебираємо кожен елемент li.item
categoryItems.forEach((item) => {
  // Отримуємо текст заголовку (тег <h2>) і кількість елементів (теги <li>) в категорії
  const categoryName = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li").length;
  
  // Виводимо інформацію про категорію в консоль
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});