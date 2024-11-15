let years = document.querySelectorAll('li');
let sum = 0;
for (let year of years) {
	
	let yearValue = +year.textContent;

	
	let digitSum = yearValue
		.toString()              
		.split('')               
		.reduce((acc, digit) => acc + +digit, 0); 


	if (digitSum === 6) {
		
		sum += yearValue;
	}
}


console.log('Сумма годов:', sum);
