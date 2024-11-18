document.addEventListener('DOMContentLoaded', () => {
    // Получаем ссылку на элемент
    let elem = document.querySelector('#elem');
    
    // №1 Перебираем все узлы и выводим текст всех узлов
    console.log('Тексты всех узлов:');
    for (let node of elem.childNodes) {
      console.log(node.textContent);
    }
  
    // №2 Перебираем все узлы и выводим тексты только комментариев и текстовых узлов
    console.log('Тексты комментариев и текстовых узлов:');
    for (let node of elem.childNodes) {
      if (node.nodeType === 3 || node.nodeType === 8) { // 3 - текстовый узел, 8 - комментарий
        console.log(node.nodeValue);
      }
    }
  
    // №3 Перебираем все узлы и выводим тексты только текстовых узлов и элементов
    console.log('Тексты текстовых узлов и элементов:');
    for (let node of elem.childNodes) {
      if (node.nodeType === 1 || node.nodeType === 3) { // 1 - элемент, 3 - текст
        console.log(node.textContent);
      }
    }
  
    // №4 Перебираем все узлы и записываем их тип в конец текста
    console.log('Тексты с типом узлов в конце:');
    for (let node of elem.childNodes) {
      node.textContent += ` (Тип узла: ${node.nodeType})`;
      console.log(node.textContent);
    }
  });
  