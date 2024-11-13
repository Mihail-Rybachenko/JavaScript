console.log('Недостатки данного кода связаны с тем, что document.querySelector(#image) вызывается несколько раз, что увеличивает нагрузку на браузер. Каждый вызов метода querySelector заставляет браузер снова и снова искать элемент по id, что неоптимально, особенно при работе с DOM')
let image = document.querySelector('#image');
console.log(image.src);
console.log(image.width);
console.log(image.height);
