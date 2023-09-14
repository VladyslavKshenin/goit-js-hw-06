// Отримуємо посилання на елемент інпуту
const validationInput = document.querySelector("#validation-input");

// Додаємо слухачика події blur для інпуту
validationInput.addEventListener("blur", () => {
  // Отримуємо значення атрибуту data-length з інпуту
  const dataLength = parseInt(validationInput.getAttribute("data-length"));

  // Отримуємо кількість введених символів у інпут
  const inputLength = validationInput.value.length;

  // Перевіряємо, чи співпадає кількість символів з data-length
  if (inputLength === dataLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});