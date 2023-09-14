// Отримуємо посилання на елементи DOM
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Додаємо слухачика події input для інпуту
nameInput.addEventListener("input", () => {
  // Отримуємо значення інпуту
  const inputValue = nameInput.value.trim(); // Видаляємо зайві пробіли з початку і в кінці

  // Перевіряємо, чи інпут порожній
  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
});