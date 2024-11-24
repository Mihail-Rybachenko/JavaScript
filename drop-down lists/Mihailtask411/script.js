let select = document.querySelector('#mySelect');
    for (let option of select) {
        if (option.selected) {
            option.textContent += '!';
        } else {
            option.textContent += '?';
        }
    }