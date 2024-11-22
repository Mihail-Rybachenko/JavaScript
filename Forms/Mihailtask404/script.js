
let textarea = document.querySelector('textarea');
let div1 = document.querySelector('div');

textarea.addEventListener('blur', function () {
    div1.textContent = textarea.value; 
});


let checkbox2 = document.querySelector('#checkbox');
let button2 = document.querySelector('#button2');
let div2 = document.querySelectorAll('div')[1]; 

button2.addEventListener('click', function () {
    if (checkbox2.checked) { 
        div2.textContent = '111'; 
    } else {
        div2.textContent = '222';
    }
});


let checkbox3 = document.querySelector('[type="checkbox"]:last-of-type'); 
let button3 = document.querySelector('#button3');

button3.addEventListener('click', function () {
    if (checkbox3.checked === true) { 
        console.log('+++');
    } else {
        console.log('---');
    }
});
