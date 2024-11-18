document.querySelector('#disableBtn').addEventListener('click', function() {
    let elem = document.querySelector('#elem');
    elem.disabled = true;  // Заблокировать инпут
  });
  document.querySelector('#disableBtn').addEventListener('click', function() {
    let elem = document.querySelector('#elem');
    elem.disabled = true;  // Заблокировать инпут
  });
  
  document.querySelector('#enableBtn').addEventListener('click', function() {
    let elem = document.querySelector('#elem');
    elem.disabled = false;  // Отблокировать инпут
  });
  document.querySelector('#checkBtn').addEventListener('click', function() {
    let elem = document.querySelector('#elem');
    if (elem.disabled) {
      console.log("Инпут заблокирован");
    } else {
      console.log("Инпут не заблокирован");
    }
  });
      