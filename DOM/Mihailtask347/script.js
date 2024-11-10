"use strict";
document.querySelector('#button1').addEventListener('click', function() {
    let paragraph = document.querySelector('#paragraph1');
    console.log(paragraph.innerHTML); 
});
document.querySelector('#button2').addEventListener('click', function() {
    let paragraph = document.querySelector('#paragraph2');
    paragraph.innerHTML = '<b>Новый жирный текст!</b>';
});