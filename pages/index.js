// Попап
let editPopup = document.querySelector('.popup');
let profileEditButton = document.querySelector('.profile__edit-button');
let profileCloseButton = document.querySelector('.popup__close-button');

// Информация об авторе
let author = {
  // name: 'Жак-Ив Кусто',
  description: 'Исследователь океана'
};

let authorName = document.querySelector('.profile__author');
// authorName.textContent = author.name;

let authorNameInput = document.querySelector('.popup__field[name="fullname"]');
// authorNameInput.value = author.name;

let authorDescription = document.querySelector('.profile__description');
authorDescription.textContent = author.description;

let authorDescriptionInput = document.querySelector('.popup__field[name="occupation"]');
authorDescriptionInput.value = author.description;

// Открытие попапа
profileEditButton.addEventListener('click', function(){
  openPopup(editPopup);
  authorNameInput.value = authorName.textContent;
  authorDescriptionInput.value = authorDescription.textContent;
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

// Закрытие попапа
profileCloseButton.addEventListener('click', function(){
  closePopup(editPopup);
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

// Сохранение данных попап
function formSubmitHandler (evt) {
  evt.preventDefault();
  let authorNameValue = authorNameInput.value;
  authorName.textContent = authorNameValue;
  let authorDescriptionValue = authorDescriptionInput.value;
  authorDescription.textContent = authorDescriptionValue;
  closePopup(editPopup);
};

editPopup.addEventListener('submit', formSubmitHandler);
// Попап конец

// Лайк
let elements = document.querySelector('.elements');

elements.onclick = function(event){
  if (event.target.ariaLabel === 'нравится'){
    event.target.classList.toggle('element__like_active')
  }
};
