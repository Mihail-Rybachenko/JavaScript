let paragraphs = document.querySelectorAll('p');

for (let paragraph of paragraphs) {
	paragraph.addEventListener('click', function addExclamation() {
		this.textContent += '!';
		this.removeEventListener('click', addExclamation);
	});
}
