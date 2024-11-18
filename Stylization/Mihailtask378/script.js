const textDiv = document.getElementById('text'); 
const btn = document.getElementById('btn'); 

btn.addEventListener('click', () => {
    textDiv.style.fontSize = '20px'; 
    textDiv.style.borderTop = '2px solid black'; 
    textDiv.style.backgroundColor = 'lightblue'; 
});
