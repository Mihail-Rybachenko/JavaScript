const listItems = document.querySelectorAll('#list li'); 
const btn = document.getElementById('btn'); 

btn.addEventListener('click', () => {
    listItems.forEach(li => {
        li.style.cssFloat = 'left'; 
    });
});
