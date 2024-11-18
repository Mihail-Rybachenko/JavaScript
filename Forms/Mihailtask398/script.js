document.querySelector('#checkBtn').addEventListener('click', function() {
    let elem = document.querySelector('#elem');
    elem.checked = true;  
  });
  document.querySelector('#uncheckBtn').addEventListener('click', function() {
    let elem = document.querySelector('#elem');
    elem.checked = false;  
  });
  document.querySelector('#messageBtn').addEventListener('click', function() {
    let elem = document.querySelector('#elem');
    let message = document.querySelector('#message');
    if (elem.checked) {
      message.textContent = 'Привет';
    } else {
      message.textContent = 'Пока';
    }
  });
  