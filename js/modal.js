"use strict";

const modalButtons = document.querySelectorAll(`.button`);
const modal = document.querySelector(`.modal`);
const body = document.querySelector(`.page`);
const modalCloseButton = document.querySelector(`.modal__close`);
const modalSuccessCloseButton = document.querySelector(`.modal-success__close`);
const modalForm = document.querySelector(`.modal__form`);
const modalPhone = document.querySelector(`.modal__phone`);
const modalName = document.querySelector(`.modal__name`);
const modalSuccess = document.querySelector(`.modal-success`);
const MAX_PHONE_NUMBER = 16;

// Модальное окно

const escPressHandler = (evt) => {
  if (evt.code === `Escape`) {
    closeModal();
  }
};

const windowPressHanlder = (evt) => {
  const target = evt.target;
  if (target === modal) {
    closeModal();
  }
};

const openModal = () => {
  modal.classList.remove(`hidden`);
  inputFocus();
  document.addEventListener(`click`, windowPressHanlder);
  document.addEventListener(`keydown`, escPressHandler);
  body.classList.add(`no-scroll`);
};

const closeModal = () => {
  modal.classList.add(`hidden`);
  document.removeEventListener(`click`, windowPressHanlder);
  document.removeEventListener(`keypress`, escPressHandler);
  body.classList.remove(`no-scroll`);
};

modalButtons.forEach((item) => {
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

const windowSuccessPressHanlder = (evt) => {
  const target = evt.target;
  if (target === modalSuccess) {
    closeModalSuccess();
  }
};

const openModalSuccess = () => {
  closeModal();
  modalSuccess.classList.remove(`hidden`);
  document.addEventListener(`click`, windowSuccessPressHanlder);
  document.addEventListener(`keydown`, modalSuccessEscPressHandler);
  body.classList.add(`no-scroll`);
};

const closeModalSuccess = () => {
  modalSuccess.classList.add(`hidden`);
  document.removeEventListener(`click`, windowSuccessPressHanlder);
  document.removeEventListener(`keypress`, modalSuccessEscPressHandler);
  body.classList.remove(`no-scroll`);
};

if (modalSuccessCloseButton) {
  modalSuccessCloseButton.addEventListener("click", closeModalSuccess);
}


modalForm.addEventListener(`submit`, function (evt) {
  evt.preventDefault();
  formValue();
  localStorageSet();
  modalPhone.value = ``;
  modalName.value = ``;
  //openModalSuccess();
});

const formValue = () => {
  if (modalName.value.length === 0) {
    modalName.setCustomValidity(`Номер должен быть из 10 цифр`);
    modalName.reportValidity();
  }
  modalName.reportValidity();
};

// Маска

let maskOptions = {
  mask: `+{7}(000)000-00-00`
};
let modalMask = IMask(modalPhone, maskOptions);

const checkModalPhoneInput = () => {
  if (modalPhone.value.length < MAX_PHONE_NUMBER) {
    modalPhone.setCustomValidity(`Номер должен быть из 10 цифр`);
  } else {
    modalPhone.setCustomValidity(``);
  }
  modalPhone.reportValidity();
};

if (modalPhone) {
  modalPhone.addEventListener(`input`, checkModalPhoneInput);
}

// Local storage

let isStorageSupport = true;
let storage = ``;

try {
  storage = localStorage.getItem(`login`);
} catch (err) {
  isStorageSupport = false;
}

const localStorageSet = (evt) => {
  if (!modalName || !modalPhone) {
    evt.preventDefault();
    modalName.setCustomValidity(`Нужно ввести`);
    modalPhone.setCustomValidity(`Нужно ввести телефон`);
  } else {
    if (isStorageSupport) {
      localStorage.setItem(`login`, modalName.value);
    }
  }
  modalName.reportValidity();
  modalPhone.reportValidity();
};

const inputFocus = () => {
  if (storage) {
    modalName.value = storage;
    modalPhone.focus();
  } else {
    modalName.focus();
  }
};
