// Открытие/закрытие попапа редактирования профиля
let editPopup = document.querySelector('.popup');
let profileEditButton = document.querySelector('.profile__edit-button');

profileEditButton.addEventListener('click', function(){
  openPopup(editPopup);
});

let profileCloseButton = document.querySelector('.popup__close-button');

profileCloseButton.addEventListener('click', function(){
  closePopup(editPopup);
});

// Открытие/закрытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove ('popup_opened');
};

// Информация об авторе
let author = {
  name: 'Жак-Ив Кусто',
  description: 'Исследователь океана'
};

let authorName = document.querySelector('.profile__author');
authorName.textContent = author.name;

let authorNameInput = document.querySelector('.popup__field[name="fullname"]');
authorNameInput.value = author.name;

let authorDescription = document.querySelector('.profile__description');
authorDescription.textContent = author.description;

let authorDescriptionInput = document.querySelector('.popup__field[name="occupation"]');
authorDescriptionInput.value = author.description;

// Copypast


// Находим форму в DOM
let formElement = document.querySelector('.popup__container'); // Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
												// Так мы можем определить свою логику отправки.
												// О том, как это делать, расскажем позже.

	// Находим поля формы в DOM
	// let nameInput = // Воспользуйтесь инструментом .querySelector()
	// let jobInput = // Воспользуйтесь инструментом .querySelector()

	// Получите значение полей из свойства value
  authorNameInput.getAttribute('value');
	// Выберите элементы, куда должны быть вставлены значения полей

	// Вставьте новые значения с помощью textContent
  authorName.textContent =
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
