let select = document.querySelector('#mySelect');
for (let option of select) {
    option.textContent += ` (${option.value})`;
}