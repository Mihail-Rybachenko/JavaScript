let paragraphs = document.querySelectorAll('p');

paragraphs.forEach((paragraph, index) => {
    paragraph.setAttribute('data-num', index + 1);
    console.log(`Абзац ${index + 1}:`, paragraph.outerHTML); 
});
