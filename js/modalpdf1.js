// Находим ссылку на кнопку "заказать"
const openModalButton = document.querySelector('.button-1');
// Находим модальное окно
const modalForm = document.querySelector('.Modal-form');

// Находим кнопку "закрыть"
const closeModalButton = document.querySelector('.modal-form__buutton-open');


// Добавляем обработчик события "клик" на кнопку "заказать"
openModalButton.addEventListener('click', function(event) {
  // Отменяем стандартное поведение ссылки
  event.preventDefault();
  // Открываем модальное окно
  modalForm.classList.remove('Modal-form--close');
});

// Добавляем обработчик события "клик" на кнопку "закрыть"
closeModalButton.addEventListener('click', function(event) {
  // Закрываем модальное окно
  modalForm.classList.add('Modal-form--close');
});






