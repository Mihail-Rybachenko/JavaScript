let inputNumber = document.querySelector('#input-number');
let numberSelect = document.querySelector('#number-select');
inputNumber.addEventListener('blur', function() {
    let index = parseInt(inputNumber.value); 
    if (!isNaN(index) && index >= 0 && index < numberSelect.options.length) {
        numberSelect.selectedIndex = index; 
    } else {
        alert('Введите допустимый номер (0 - ' + (numberSelect.options.length - 1) + ')');
    }
});
let weekdaysSelect = document.querySelector('#weekdays');
let currentDay = new Date().getDay(); 
weekdaysSelect.selectedIndex = currentDay;