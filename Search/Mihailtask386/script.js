
function addTextToPreviousSibling() {
    const elem1 = document.getElementById('elem'); 
    const prevSibling1 = elem1.previousElementSibling; 
    if (prevSibling1) {
        prevSibling1.textContent += '!'; 
    }
}


function addTextToNextSibling() {
    const elem2 = document.getElementById('elem'); 
    const nextSibling1 = elem2.nextElementSibling; 
    if (nextSibling1) {
        nextSibling1.textContent += '!'; 
    }
}


function addTextToNextOfNextSibling() {
    const elem3 = document.getElementById('elem'); 
    const nextSibling2 = elem3.nextElementSibling; 
    const nextOfNextSibling = nextSibling2 ? nextSibling2.nextElementSibling : null; 
    if (nextOfNextSibling) {
        nextOfNextSibling.textContent += '!'; 
    }
}


function swapTextWithNeighbors() {
    const elem4 = document.getElementById('elem'); 
    const prevSibling2 = elem4.previousElementSibling; 
    const nextSibling2 = elem4.nextElementSibling; 

    if (prevSibling2 && nextSibling2) {
        const temp = prevSibling2.textContent;
        prevSibling2.textContent = nextSibling2.textContent;
        nextSibling2.textContent = temp;
    }
}
