// Получаем все элементы с классом "input-section"
const inputSections = document.querySelectorAll('.input-section');

// Для каждой секции ввода
inputSections.forEach(inputSection => {
  // Находим в ней поле ввода
  const inputField = inputSection.querySelector('input, textarea');

  // Находим соответствующую надпись
  const inputLabel = inputSection.querySelector('.input-label');

  // Добавляем обработчик события "input" для поля ввода
  inputField.addEventListener('input', () => {
    // Если поле ввода не пустое, скрываем надпись
    if (inputField.value.trim() !== '') {
      inputLabel.style.opacity = '0';
    } else {
      // Если поле ввода пустое, отображаем надпись
      inputLabel.style.opacity = '1';
    }
  });
});
