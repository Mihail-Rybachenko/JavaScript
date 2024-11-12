function getClassAttribute() {
  let elem = document.querySelector('#elem1');
  alert(elem.className); // Выводим значение атрибута class
}

// Задание 2: Запись значения в атрибут class
function setClassAttribute() {
  let elem = document.querySelector('#elem2');
  elem.className = 'new-class'; // Устанавливаем новый класс
  alert('Класс записан: ' + elem.className);
}

// Задание 3: Получение массива классов
function getClassList() {
  let elem = document.querySelector('#elem3');
  let classes = elem.className.split(' '); // Преобразуем строку классов в массив
  alert(classes); // Выводим массив классов
}