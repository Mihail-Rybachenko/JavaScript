const text = document.getElementById('text'); 
const strikeBtn = document.getElementById('strike'); 
const boldBtn = document.getElementById('bold'); 
const redBtn = document.getElementById('red'); 


strikeBtn.addEventListener('click', () => {
    text.classList.toggle('strikethrough'); 
});

boldBtn.addEventListener('click', () => {
    text.classList.toggle('bold'); 
});

redBtn.addEventListener('click', () => {
    text.classList.toggle('red'); 
});
