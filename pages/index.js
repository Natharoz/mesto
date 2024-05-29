// Попап
let editPopup = document.querySelector('.popup_type_edit');
let addCardPopup = document.querySelector('.popup_type_add-card');
let profileEditButton = document.querySelector('.profile__edit-button');
let profileAddButton = document.querySelector('.profile__add-button');

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

// Открытие попапа профиля
profileEditButton.addEventListener('click', function(){
  openPopup(editPopup);
  authorNameInput.value = authorName.textContent;
  authorDescriptionInput.value = authorDescription.textContent;
});

// Открытие попапа добавления карточки
profileAddButton.addEventListener('click', function(){
  openPopup(addCardPopup);
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
  let profileCloseButton = popup.querySelector('.popup__close-button');
  profileCloseButton.addEventListener('click', function(){
    closePopup();
  });
};

// Закрытие попапа редактирования

// function closePopup(evt) {
//   evt.classList.remove('popup_opened');
// };

function closePopup() {
  let popup = document.querySelector('.popup_opened');
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
  if (event.target.ariaLabel === 'Нравится'){
    event.target.classList.toggle('element__like_active')
  }
};

const initialCards = [
  {
    name: 'Архыз',
    alt: 'Архыз',
    link: './images/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    alt: 'Челябинская область',
    link: './images/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    alt: 'Иваново',
    link: './images/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    alt: 'Камчатка',
    link: './images/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    alt: 'Холмогорский район',
    link: './images/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    alt: 'Байкал',
    link: './images/baikal.jpg'
  },
  {
    name: 'Карачаевск',
    alt: 'Карачаевск',
    link: './images/karachaevsk.png'
  },
  {
    name: 'Гора Эльбрус',
    alt: 'Гора Эльбрус',
    link: './images/elbrus.png'
  },
  {
    name: 'Домбай',
    alt: 'Домбай',
    link: './images/dombay.png'
  }
];

const createCard = (card) => {
  const newCard = document.querySelector('#cardTemplate').content.cloneNode(true);
  const cardHeading = newCard.querySelector('.element__title');
  cardHeading.textContent = card.name;
  const cardImage = newCard.querySelector('.element__place');
  cardImage.setAttribute('alt', card.alt);
  cardImage.setAttribute('src', card.link);
  const deleteButton = newCard.querySelector('.element__delete');
  deleteButton.addEventListener('click', handleDeleteButtonClick);
  elements.append(newCard);
}

initialCards.forEach(createCard);

function handleDeleteButtonClick(event) {
  const button = event.target
  const card = button.closest('.element');
  card.remove();
}

