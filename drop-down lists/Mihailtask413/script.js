let select = document.querySelector('#mySelect');
    let showTextButton = document.querySelector('#showText');
    let addExclamationButton = document.querySelector('#addExclamation');

    showTextButton.addEventListener('click', function() {
        let selectedOption = select[select.selectedIndex];
        alert(selectedOption.textContent);
    });
    addExclamationButton.addEventListener('click', function() {
        let selectedOption = select[select.selectedIndex];
        selectedOption.textContent += '!';
    });