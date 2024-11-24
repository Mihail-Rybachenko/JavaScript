let elem = document.querySelector('#elem');
    
    elem.addEventListener('click', function(event) {
        if (event.altKey) {
            event.target.style.backgroundColor = 'red';  
        }
    });
    let listItems = document.querySelectorAll('#elem li');
    listItems.forEach(item => {
        item.addEventListener('click', function(event) {
            let text = event.target.textContent;
            if (event.ctrlKey) {
                event.target.textContent = text + ' 1';  
            } else if (event.shiftKey) {
                event.target.textContent = text + ' 2';  
            }
        });
    });