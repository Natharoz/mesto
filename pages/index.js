// Попап
const editPopup = document.querySelector('.popup_type_edit');
const addCardPopup = document.querySelector('.popup_type_add-card');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

// Информация об авторе
let author = {
  name: 'Жак-Ив Кусто',
  description: 'Исследователь океана'
};

const authorName = document.querySelector('.profile__author');
authorName.textContent = author.name;

const authorNameInput = document.querySelector('.popup__field[name="fullname"]');
authorNameInput.value = author.name;

const authorDescription = document.querySelector('.profile__description');
authorDescription.textContent = author.description;

const authorDescriptionInput = document.querySelector('.popup__field[name="occupation"]');
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

// Сохранение данных попап редактирования профиля
function profileFormSubmitHandler (evt) {
  evt.preventDefault();
  let authorNameValue = authorNameInput.value;
  authorName.textContent = authorNameValue;
  let authorDescriptionValue = authorDescriptionInput.value;
  authorDescription.textContent = authorDescriptionValue;
  closePopup(editPopup);
};

editPopup.addEventListener('submit', profileFormSubmitHandler);
// Попап конец

// Лайк
let elements = document.querySelector('.elements');

elements.onclick = function(event){
  if (event.target.ariaLabel === 'Нравится'){
    event.target.classList.toggle('element__like_active')
  }
};

// Загрузка карточек
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
  elements.prepend(newCard);
}

initialCards.forEach(createCard);

// Удаление карточек
function handleDeleteButtonClick(event) {
  const button = event.target
  const card = button.closest('.element');
  card.remove();
}

// Создание данных карточек через форму
addCardPopup.addEventListener('submit', cardFormSubmitHandler);

function cardFormSubmitHandler(event) {
  event.preventDefault();
  const cardNameInput = document.querySelector('.popup__field[name="cardname"]').value;
  const linkInput = document.querySelector('.popup__field[name="link"]').value;
  const card = {
    name: cardNameInput,
    alt: `${cardNameInput}`,
    link: linkInput
  }
  createCard(card);
  closePopup(addCardPopup);
}
