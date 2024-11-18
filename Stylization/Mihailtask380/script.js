const text = document.getElementById('text'); // Находим абзац
const strikeBtn = document.getElementById('strike'); // Кнопка "Перечеркнуть"
const boldBtn = document.getElementById('bold'); // Кнопка "Сделать жирным"
const redBtn = document.getElementById('red'); // Кнопка "Сделать красным"

// Добавляем обработчики событий
strikeBtn.addEventListener('click', () => {
    text.classList.toggle('strikethrough'); // Добавляем или убираем класс
});

boldBtn.addEventListener('click', () => {
    text.classList.toggle('bold'); // Добавляем или убираем класс
});

redBtn.addEventListener('click', () => {
    text.classList.toggle('red'); // Добавляем или убираем класс
});
