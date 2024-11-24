let select = document.querySelector('#mySelect');
    let button = document.querySelector('#selectLast');
    button.addEventListener('click', function() {
        let lastOption = select[select.options.length - 1];
        lastOption.selected = true;
    });