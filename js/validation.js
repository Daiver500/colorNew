"use strict";

const LETTERS_MAX = 50;
const REG_EXP = /^#([а-яА-Я]|[a-zA-Z])$/;

const userMessage = {
  LESS_THEN_FIVE: `Нельзя указать больше пяти хэш-тегов`,
  NO_DUPLICATES: `Один и тот же хэш-тег не может быть использован дважды`,
  CORRECT: `Не верный формат хештега`,
};

const commentsInputHandler = (evt) => {
  const {target: commentsField} = evt;
  const valueLength = commentsField.value.length;
  if (commentsField.value.length > LETTERS_MAX) {
    commentsField.setCustomValidity(`Удалите ` + (LETTERS_MAX - valueLength) + ` симв.`);
  } else {
    commentsField.setCustomValidity(``);
  }
  commentsField.reportValidity();

};

window.validation = {
  commentsInputHandler
};
