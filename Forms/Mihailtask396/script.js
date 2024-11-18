document.addEventListener('DOMContentLoaded', () => {
    let textarea = document.querySelector('#elem');
    let paragraph = document.querySelector('#output');
    textarea.addEventListener('blur', () => {
      paragraph.textContent = textarea.value;
    });
  });
  