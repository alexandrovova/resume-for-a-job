  // Находим ссылку на кнопку "заказать"
  const openModalButton2 = document.querySelector('.button-2');
  // Находим модальное окно
  const modalpdf = document.querySelector('.Modal-pdf');
  
  // Находим кнопку "закрыть"
  const closeModalButton2 = document.querySelector('.modal-pdf__buutton-open');
  
  
  // Добавляем обработчик события "клик" на кнопку "заказать"
  openModalButton2.addEventListener('click', function(event) {
    // Отменяем стандартное поведение ссылки
    event.preventDefault();
    // Открываем модальное окно
    modalpdf.classList.remove('Modal-pdf--close');
  });
  
  // Добавляем обработчик события "клик" на кнопку "закрыть"
  closeModalButton2.addEventListener('click', function(event) {
    // Закрываем модальное окно
    modalpdf.classList.add('Modal-pdf--close');
  });