
// Задача №1
document.querySelector('#button1').addEventListener('click', function() {
    let elem = document.querySelector('#elem1');
    alert(elem.type); 
});

// Задача №2
document.querySelector('#button2').addEventListener('click', function() {
    let elem = document.querySelector('#elem2');
    elem.type = 'submit';
     
});

// Задача №3
document.querySelector('#button3').addEventListener('click', function() {
    let link = document.querySelector('#link');
    document.querySelector('#paragraph1').textContent = link.href;
});

// Задача №4
document.querySelector('#button4').addEventListener('click', function() {
    let link = document.querySelector('#link2');
    link.textContent += ` (${link.href})`;
});

// Задача №5
document.querySelector('#button5').addEventListener('click', function() {
    let img = document.querySelector('#image1');
    document.querySelector('#paragraph2').textContent = img.src;
});

// Задача №6
document.querySelector('#button6').addEventListener('click', function() {
    let img = document.querySelector('#image2');
    img.width = 300;
});

// Задача №7
document.querySelector('#button7').addEventListener('click', function() {
    let img = document.querySelector('#image3');
    img.width *= 2;
});

// Задача №8
document.querySelector('#button8-1').addEventListener('click', function() {
    document.querySelector('#image4').src = 'image1.jpg';
});

document.querySelector('#button8-2').addEventListener('click', function() {
    document.querySelector('#image4').src = 'image2.jpg';
});
