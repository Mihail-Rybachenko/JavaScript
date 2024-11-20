
let task1Input = document.querySelector('#task1');
let task1Output = document.querySelector('#task1-output');

task1Input.addEventListener('change', function () {
  task1Output.textContent = this.value;
});


let task2Checkbox = document.querySelector('#task2');
let task2Output = document.querySelector('#task2-output');

task2Checkbox.addEventListener('change', function () {
  task2Output.textContent = this.checked ? 'Чекбокс отмечен' : 'Чекбокс не отмечен';
});


let task3Input = document.querySelector('#task3');

task3Input.addEventListener('blur', function () {
  console.log('Событие blur: потеря фокуса');
});

task3Input.addEventListener('change', function () {
  console.log('Событие change: значение изменено');
});


let task4Input = document.querySelector('#task4');

task4Input.addEventListener('change', function () {
  if (this.value.length < 5) {
    this.classList.remove('red-border');
    this.classList.add('green-border');
  } else {
    this.classList.remove('green-border');
    this.classList.add('red-border');
  }
});
