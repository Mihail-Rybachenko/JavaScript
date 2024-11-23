
const weekdaysSelect = document.querySelector('#weekdays');
const dayMessage = document.querySelector('#dayMessage');
weekdaysSelect.addEventListener('change', function () {
    const dayValue = parseInt(this.value); 
    if (dayValue === 6 || dayValue === 7) {
        dayMessage.textContent = 'Вы выбрали выходной день.';
    } else {
        dayMessage.textContent = 'Вы выбрали рабочий день.';
    }
});
