// №1: Записать текст в инпут
let elem = document.querySelector('#elem');
let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
  elem.value = 'new text'; 
});

// №2: Записать текст из инпута в абзац
let inputElem = document.querySelector('#inputElem');
let outputElem = document.querySelector('#outputElem');
let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  outputElem.textContent = inputElem.value; 
});

// №3: Записать квадрат числа из первого инпута во второй инпут
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  let number = Number(input1.value);
  input2.value = number * number; 
});

// №4: Поменять значения местами
let input3 = document.querySelector('#input3');
let input4 = document.querySelector('#input4');
let btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', () => {
  let temp = input3.value;
  input3.value = input4.value;
  input4.value = temp; 
});

// №5: Записать среднее арифметическое чисел из 5 инпутов
let inputs = [
  document.querySelector('#input5'),
  document.querySelector('#input6'),
  document.querySelector('#input7'),
  document.querySelector('#input8'),
  document.querySelector('#input9')
];
let resultElem = document.querySelector('#result');
let btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', () => {
  let sum = 0;
  let count = 0;
  
  inputs.forEach(input => {
    let value = Number(input.value);
    if (!isNaN(value)) { 
      sum += value;
      count++;
    }
  });
  
  let average = count > 0 ? sum / count : 0;
  resultElem.textContent = `Среднее арифметическое: ${average}`; 
});
