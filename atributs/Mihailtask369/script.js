let elem = document.querySelector('#elem');
elem.addEventListener('click', function() {
    elem.textContent += elem.dataset.text;
});
let divs = document.querySelectorAll('div[data-num]');
divs.forEach(div => {
    div.addEventListener('click', function() {
        div.textContent += div.dataset.num;
    });
});
let counterButton = document.querySelector('#counter');
let showButton = document.querySelector('#showClicks');

counterButton.addEventListener('click', function() {
    let clicks = Number(counterButton.dataset.clicks) + 1;
    counterButton.dataset.clicks = clicks;
});

showButton.addEventListener('click', function() {
    alert(`Кнопка была нажата ${counterButton.dataset.clicks} раз.`);
});
let input = document.querySelector('#elem');
input.addEventListener('blur', function() {
    let requiredLength = Number(input.dataset.length);
    if (input.value.length !== requiredLength) {
        alert(`Введенное количество символов должно быть ${requiredLength}.`);
    }
});
let input1 = document.querySelector('#elem');
input1.addEventListener('blur', function() {
    let minLength = Number(input1.dataset.min);
    let maxLength = Number(input1.dataset.max);
    let inputLength = input1.value.length;

    if (inputLength < minLength || inputLength > maxLength) {
        alert(`Длина текста должна быть от ${minLength} до ${maxLength} символов.`);
    }
});
