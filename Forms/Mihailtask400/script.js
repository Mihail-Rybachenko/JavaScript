let radios = document.querySelectorAll('input[type="radio"]');
let button = document.querySelector('#button');
let result = document.querySelector('#result');

button.addEventListener('click', function() {
    for (let radio of radios) {
        if (radio.checked) {
            result.textContent = `Выбрано значение: ${radio.value}`;
        }
    }
});
