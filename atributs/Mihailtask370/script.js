let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
    let price = Number(elem.dataset.productPrice);
    let amount = Number(elem.dataset.productAmount);
    let totalCost = price * amount;

    elem.textContent += ` (Стоимость: ${totalCost})`;
});
