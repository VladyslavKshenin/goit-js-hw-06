// Отримуємо посилання на елементи DOM
const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

// Додаємо слухачика події input для повзунка
fontSizeControl.addEventListener("input", () => {
  // Отримуємо поточне значення повзунка
  const fontSize = fontSizeControl.value;

  // Змінюємо розмір тексту з використанням інлайн-стилю
  textSpan.style.fontSize = `${fontSize}px`;
});