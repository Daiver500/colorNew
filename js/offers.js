"use strict";

const offersButtons = document.querySelectorAll(`.offers__button`);
const offersProfitCards = document.querySelectorAll(`.offers__profit`);
const offersButtonsParent = document.querySelector(`.offers__list`);
const offersButtonsPercent = document.querySelectorAll(`.offers__button-percent`);
const offersPercentsCards = document.querySelectorAll(`.offers__percents`);
const offersButtonsPercentsParent = document.querySelector(`.offers__list-percent`);

const hideContent = () => {
  offersProfitCards.forEach((item) => {
    item.classList.add(`hidden`);
    item.classList.remove(`offers__profit--active`);
  });
  offersButtons.forEach((item) => {
    item.classList.remove(`offers__button--active`);
  });
};

const showContent = (i = 0) => {
  offersProfitCards[i].classList.remove("hidden");
  offersProfitCards[i].classList.add("offers__profit--active");
  offersButtons[i].classList.add(`offers__button--active`);
};

hideContent();
showContent();

offersButtonsParent.addEventListener(`click`, (evt) => {
  const target = evt.target;
  if (target && target.classList.contains(`offers__button`)) {
    offersButtons.forEach((item, i) => {
      if (target === item) {
        hideContent();
        showContent(i);
      }
    });
  }
});


const hideContentTest = () => {
  offersPercentsCards.forEach((item) => {
    item.classList.add(`hidden`);
    item.classList.remove(`offers__percents--active`);
  });
  offersButtonsPercent.forEach((item) => {
    item.classList.remove(`offers__button--active`);
  });
};


const showContentTest = (i = 0) => {
  offersPercentsCards[i].classList.remove("hidden");
  offersPercentsCards[i].classList.add("offers__percents--active");
  offersButtonsPercent[i].classList.add(`offers__button--active`);
};

hideContentTest();
showContentTest();

offersButtonsPercentsParent.addEventListener(`click`, (evt) => {
  const target = evt.target;
  if (target && target.classList.contains(`offers__button-percent`)) {
    offersButtonsPercent.forEach((item, i) => {
      if (target === item) {
        hideContentTest();
        showContentTest(i);
      }
    });
  }
});

