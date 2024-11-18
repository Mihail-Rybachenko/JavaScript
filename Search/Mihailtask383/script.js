const elem = document.getElementById('elem'); 
const firstChild = elem.firstElementChild; 
firstChild.style.color = 'red'; 
const lastChild = elem.lastElementChild; 
lastChild.style.color = 'red'; 
const children = elem.children; 


for (let child of children) {
    child.textContent += '!'; 
}

