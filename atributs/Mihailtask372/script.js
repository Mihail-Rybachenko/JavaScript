const elem = document.getElementById('elem'); 
console.log(elem.classList.length);  
for (const className of elem.classList) { 
    console.log(className); 
}
