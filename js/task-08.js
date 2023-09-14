// Отримуємо посилання на форму та елементи форми
const loginForm = document.querySelector('.login-form');
const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;

// Додаємо слухача події submit до форми
loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Забороняємо перезавантаження сторінки

  // Отримуємо значення полів форми
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  // Перевіряємо, чи всі поля заповнені
  if (emailValue === '' || passwordValue === '') {
    alert('Усі поля повинні бути заповнені');
  } else {
    // Створюємо об'єкт із введеними даними
    const formData = {
      email: emailValue,
      password: passwordValue,
    };

    // Виводимо об'єкт у консоль
    console.log(formData);

    // Очищаємо значення полів форми
    loginForm.reset();
  }
});
