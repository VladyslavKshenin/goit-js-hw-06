// Змінна для зберігання поточного значення лічильника
let counterValue = 0;

// Отримуємо посилання на елементи DOM
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterSpan = document.querySelector('#value');

// Функція для оновлення значення лічильника в DOM
function updateCounterValue() {
  counterSpan.textContent = counterValue;
}

// Додаємо слухачика для кнопки "Зменшити"
decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  updateCounterValue();
});

// Додаємо слухачика для кнопки "Збільшити"
incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  updateCounterValue();
});

// Ініціалізуємо початкове значення лічильника
updateCounterValue();