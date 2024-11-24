let elem = document.querySelector('#elem');
    elem.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.textContent += '!';
        } else if (event.target.tagName === 'UL') {
            console.log('Клик был по тегу UL');
        }
    });