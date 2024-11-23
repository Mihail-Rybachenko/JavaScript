// Задание №1
let select = document.querySelector('#select');
let paragraph = document.querySelector('#paragraph');
let button1 = document.querySelector('#button1');

button1.addEventListener('click', function () {
    paragraph.textContent = `Вы выбрали: ${select.value}`; // Записываем текст выбранного пункта в абзац
});
// Задание №2
let yearsSelect = document.querySelector('#years');
let message = document.querySelector('#leapYearMessage');

// Генерация списка годов от 2020 до 2030
for (let year = 2020; year <= 2030; year++) {
    let option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearsSelect.appendChild(option);
}

// Определение високосного года
yearsSelect.addEventListener('change', function () {
    let selectedYear = parseInt(this.value);
    if ((selectedYear % 4 === 0 && selectedYear % 100 !== 0) || (selectedYear % 400 === 0)) {
        message.textContent = `${selectedYear} - это високосный год.`;
    } else {
        message.textContent = `${selectedYear} - это не високосный год.`;
    }
});
