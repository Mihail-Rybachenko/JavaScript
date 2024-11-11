let elem = document.querySelector('#elem');


elem.addEventListener('focus', function() {
  elem.value = 1;
});


elem.addEventListener('blur', function() {
  elem.value = 2;
});
let inputNumber = document.querySelector('#inputNumber');
let resultElem = document.querySelector('#result');


inputNumber.addEventListener('blur', function() {
  let number = Number(inputNumber.value);
  if (!isNaN(number)) {
    resultElem.textContent = `Квадрат числа: ${number * number}`;
  } else {
    resultElem.textContent = 'Пожалуйста, введите число.';
  }
});
let inputText = document.querySelector('#inputText');


inputText.addEventListener('focus', function() {
  inputText.value = '';  
});
