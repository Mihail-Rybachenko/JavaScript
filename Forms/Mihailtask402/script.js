let elem = document.querySelector('#elem');

elem.addEventListener('input', function() {
  if (this.value.length === 5) {
    alert('Длина текста достигла 5 символов!');
  }
});
let elem1 = document.querySelector('#elem1');
let message = document.querySelector('#message');

elem1.addEventListener('input', function() {
  let remaining = 5 - this.value.length;
  if (remaining >= 0) {
    message.textContent = `Осталось ввести ${remaining} символов.`;
  } else {
    message.textContent = `Вы превысили длину на ${Math.abs(remaining)} символов.`;
  }
});
