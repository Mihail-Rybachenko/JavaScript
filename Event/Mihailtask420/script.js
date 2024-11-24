let elem = document.querySelector('#elem');
elem.addEventListener('click', function(event) {
    event.preventDefault();  
    let href = event.target.getAttribute('href');
    event.target.textContent = 'ссылка (' + href + ')';  
});
let sumLink = document.querySelector('#sumLink');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let result = document.querySelector('#result');

sumLink.addEventListener('click', function(event) {
    event.preventDefault();  
    let num1 = parseFloat(input1.value) || 0;  
    let num2 = parseFloat(input2.value) || 0;  
    let sum = num1 + num2;  
    result.textContent = 'Результат: ' + sum;  
});