"use strict";

const openModalButtons = document.querySelectorAll(`.button`);
const modal = document.querySelector(`.modal`);
const body = document.querySelector(`.page`);
const modalCloseButton = document.querySelector(`.modal__close`);
const modalSuccessCloseButton = document.querySelector(`.modal-success__close`);
const modalForm = document.querySelector(`.modal__form`);
const modalPhone = document.querySelector(`.modal__phone`);
const modalName = document.querySelector(`.modal__name`);
const modalSuccess = document.querySelector(`.modal-success`);
const MAX_PHONE_NUMBER = 16;
const MIN_PHONE_NUMBER = 1;

// Модальное окно

const escPressHandler = (evt) => {
  if (evt.code === `Escape`) {
    closeModal();
  }
};

const windowClickHanlder = (evt) => {
  const target = evt.target;
  if (target === modal) {
    closeModal();
  }
};

const openModal = () => {
  modal.classList.remove(`hidden`);
  document.addEventListener(`click`, windowClickHanlder);
  document.addEventListener(`keydown`, escPressHandler);
  body.classList.add(`no-scroll`);
  inputFocus();
  modalName.addEventListener(`input`, checkModalNameInputRegExp);
  modalName.addEventListener(`focusin`, modalInputsFocusInHandler);
  modalName.addEventListener(`focusout`, modalInputsFocusOutHandler);
  modalPhone.addEventListener(`input`, checkModalPhoneInput);
  modalPhone.addEventListener(`focusin`, modalInputsFocusInHandler);
  modalPhone.addEventListener(`focusout`, modalInputsFocusOutHandler);
  modalForm.addEventListener(`submit`, modalFormSendingHanler);
};

const modalInputsFocusInHandler = () => {
  document.removeEventListener(`keydown`, escPressHandler);
};

const modalInputsFocusOutHandler = () => {
  document.addEventListener(`click`, windowClickHanlder);
};

const closeModal = () => {
  modal.classList.add(`hidden`);
  document.removeEventListener(`click`, windowClickHanlder);
  document.removeEventListener(`keypress`, escPressHandler);
  body.classList.remove(`no-scroll`);
  modalName.removeEventListener(`input`, checkModalNameInputRegExp);
  modalName.removeEventListener(`focusin`, modalInputsFocusInHandler);
  modalName.removeEventListener(`focusout`, modalInputsFocusOutHandler);
  modalPhone.removeEventListener(`focusin`, modalInputsFocusInHandler);
  modalPhone.removeEventListener(`focusout`, modalInputsFocusOutHandler);
  modalPhone.removeEventListener(`input`, checkModalPhoneInput);
  modalForm.removeEventListener(`submit`, modalFormSendingHanler);
  modalPhone.value = ``;
  modalName.style.outline = ``;
  modalName.style.background = ``;
};

openModalButtons.forEach((item) => {
  item.addEventListener(`click`, openModal);
});

if (modalCloseButton) {
  modalCloseButton.addEventListener(`click`, closeModal);
}

const modalSuccessEscPressHandler = (evt) => {
  if (evt.code === `Escape`) {
    closeModalSuccess();
  }
};

const windowSuccessClickHanlder = (evt) => {
  const target = evt.target;
  if (target === modalSuccess) {
    closeModalSuccess();
  }
};

const openModalSuccess = () => {
  closeModal();
  modalSuccess.classList.remove(`hidden`);
  document.addEventListener(`click`, windowSuccessClickHanlder);
  document.addEventListener(`keydown`, modalSuccessEscPressHandler);
  body.classList.add(`no-scroll`);
};

const closeModalSuccess = () => {
  modalSuccess.classList.add(`hidden`);
  document.removeEventListener(`click`, windowSuccessClickHanlder);
  document.removeEventListener(`keypress`, modalSuccessEscPressHandler);
  body.classList.remove(`no-scroll`);
};

if (modalSuccessCloseButton) {
  modalSuccessCloseButton.addEventListener("click", closeModalSuccess);
}

const modalFormSendingHanler = (evt) => {
  evt.preventDefault();
  if (modalPhone.value === ``) {
    modalPhone.setCustomValidity(`Заполните, пожалуйста, номер`);
  } else {
    modalPhone.setCustomValidity(``);
    openModalSuccess();
  }
  modalPhone.reportValidity();
  localStorageSet();
};

// Маска

let maskOptions = {
  mask: `+{7}(000)000-00-00`
};
let modalMask = IMask(modalPhone, maskOptions);


// Local storage

let isStorageSupport = true;
let storage = ``;

try {
  storage = localStorage.getItem(`login`);
} catch (err) {
  isStorageSupport = false;
}

const localStorageSet = () => {
  if (isStorageSupport) {
    localStorage.setItem(`login`, modalName.value);
  }
};

const inputFocus = () => {
  if (storage) {
    modalName.value = storage;
    modalPhone.focus();
  } else {
    modalName.focus();
  }
};

// Валидация

const LETTERS_MAX = 10;
const WORDS_REG_EXP = /^[A-zА-яЁё]+$/;
const userMessage = {
  EMPTY: `Укажите, пожалуйста, имя`,
  CORRECT: `Заполните, пожалуйста, имя на кириллице или латинице`,
  TOO__MANY: `Слишком много букв`,
};

const checkModalNameInputRegExp = () => {
  const wordsArray = modalName.value.toLowerCase().split(` `);
  const isWordCorrect = wordsArray.every((tag) => {
    return WORDS_REG_EXP.test(tag);
  });
  modalName.setCustomValidity(``);

  if (!isWordCorrect) {
    modalName.setCustomValidity(userMessage.CORRECT);
    modalName.style.outline = `2px solid red`;
    modalName.style.background = `pink`;
  }

  if (modalName.value.length > LETTERS_MAX) {
    modalName.setCustomValidity(userMessage.TOO__MANY);
  }

  if (modalName.value === ``) {
    modalName.setCustomValidity(userMessage.EMPTY);
  }

  modalName.reportValidity();

  if (isWordCorrect || modalName.value === `` || !modalName.value.length > LETTERS_MAX) {
    modalName.style.outline = ``;
    modalName.style.background = ``;
  } else {
    modalName.style.outline = `2px solid red`;
    modalName.style.background = `pink`;
  }
};


const checkModalPhoneInput = () => {
  if (modalPhone.value.length < MAX_PHONE_NUMBER && modalPhone.value.length > MIN_PHONE_NUMBER) {
    modalPhone.setCustomValidity(`Номер должен быть из 10 цифр`);
  } else {
    modalPhone.setCustomValidity(``);
  }
  modalPhone.reportValidity();
};


