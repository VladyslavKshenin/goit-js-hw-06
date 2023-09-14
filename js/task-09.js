function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Отримуємо посилання на елементи DOM
const body = document.body;
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

// Додаємо слухачика події click до кнопки
changeColorButton.addEventListener('click', () => {
  // Генеруємо випадковий кольор
  const randomColor = getRandomHexColor();

  // Змінюємо фон елемента <body>
  body.style.backgroundColor = randomColor;

  // Виводимо значення кольору в <span class="color">
  colorSpan.textContent = randomColor;
});
