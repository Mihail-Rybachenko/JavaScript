const box = document.getElementById('box'); 
const btn = document.getElementById('btn'); 

btn.addEventListener('click', () => {
    box.style.width = '200px'; 
    box.style.height = '100px'; 
    box.style.border = '2px solid black'; 
});
