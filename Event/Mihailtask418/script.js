let inputField = document.querySelector('#inputField');
    let output = document.querySelector('#output');

    
    inputField.addEventListener('keypress', function(event) {
        console.log(`Клавиша: ${event.key}, Код: ${event.code}`);
    });

    
    inputField.addEventListener('keypress', function(event) {
        console.log(`Нажатая клавиша: ${event.key}, Код клавиши: ${event.code}`);
    });

    
    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            console.log(`Код клавиши Enter: ${event.code}`);
        }
    });

    
    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Backspace') {
            console.log(`Код клавиши Backspace: ${event.code}`);
        }
    });

    
    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            output.textContent = inputField.value;  
            inputField.value = '';  
        }
    });