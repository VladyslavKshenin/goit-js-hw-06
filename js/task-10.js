// Отримуємо посилання на елементи DOM
const inputRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

// Додаємо слухача події click на кнопку "Створити"
createBtnRef.addEventListener('click', createBoxes);

// Додаємо слухача події click на кнопку "Очистити"
destroyBtnRef.addEventListener('click', destroyBoxes);

// Функція для генерації випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

// Функція для створення колекції елементів
function createBoxes() {
  const amount = inputRef.valueAsNumber;
  const initialSize = 30;
  let boxesMarkup = '';

  for (let i = 0; i < amount; i += 1) {
    const size = initialSize + i * 10;
    const backgroundColor = getRandomHexColor();
    boxesMarkup += `<div style="width: ${size}px; height: ${size}px; background-color: ${backgroundColor};"></div>`;
  }

  boxesRef.innerHTML = boxesMarkup;
}

// Функція для очищення колекції елементів
function destroyBoxes() {
  boxesRef.innerHTML = '';
}