"use strict";

const calculatorInput = document.querySelector(`.calculator__summ`);
const calculatorButtonUp = document.querySelectorAll(`.calculator__button-up`);
const calculatorButtonBottom = document.querySelectorAll(`.calculator__button-bottom`);
const calculatorButtonsTop = document.querySelector(`.calculator__buttons-top`);
const calculatorButtonsBottom = document.querySelector(`.calculator__buttons-bottom`);
let calculatorProfitPercent = document.querySelector(`.calculator__text-percent`);
let monthlyResult = document.querySelector(`.calculator__text-month`);
let yearResult = document.querySelector(`.calculator__text-year`);

const SIX_MONTHS = document.getElementById(`six-months`);
const TWELVE__MONTHS = document.getElementById(`twelve-months`);
const AT_THE_END_PAYMENT = document.getElementById(`at-the-end`);
const MONTLY_PAYMENT = document.getElementById(`monthly`);
const MIN_VALUE = 100000;
const MAX_VALUE = 5000000;
const MONTH__PERCENT = 0.15;
const YEAR_PERCENT = 0.2;


SIX_MONTHS.value = 2;
TWELVE__MONTHS.value = 3;
AT_THE_END_PAYMENT.value = 4;
MONTLY_PAYMENT.value = 5;

const setActiveBtnTop = (evt) => {
  const currentActive = calculatorButtonsTop.querySelector(`.calculator__button--active`);
  const {target} = evt;
  if (!target.classList.contains(`calculator__button--active`)) {
    currentActive.classList.remove(`calculator__button--active`);
    target.classList.add(`calculator__button--active`);
  }
};

const setActiveBtnBottom = (evt) => {
  const currentActive = calculatorButtonsBottom.querySelector(`.calculator__button--active`);
  const {target} = evt;
  if (!target.classList.contains(`calculator__button--active`)) {
    currentActive.classList.remove(`calculator__button--active`);
    target.classList.add(`calculator__button--active`);
  }
};

calculatorButtonUp.forEach((item) => {
  item.addEventListener(`click`, setActiveBtnTop);
});

calculatorButtonBottom.forEach((item) => {
  item.addEventListener(`click`, setActiveBtnBottom);
});

const calculatorInputHandler = () => {
  if (calculatorInput.value > MAX_VALUE) {
    calculatorInput.value = MAX_VALUE;
    calculatorInput.setCustomValidity(`Максимальная сумма 5 млн рублей`);
  } else {
    calculatorInput.setCustomValidity(``);
  }
  calculatorInput.reportValidity();
};
calculatorInput.addEventListener("input", calculatorInputHandler);


const getFinalPriceMonth = () => {
  if (calculatorInput.value <= MAX_VALUE && calculatorInput.value >= MIN_VALUE) {
    return calculatorInput.value * MONTH__PERCENT;
  }
  if (calculatorInput.value < MIN_VALUE || calculatorInput.value > MAX_VALUE) {
    return calculatorInput.value * 0;
  }
};

const getFinalPriceYear = () => {
  if (calculatorInput.value <= MAX_VALUE && calculatorInput.value >= MIN_VALUE) {
    return calculatorInput.value * YEAR_PERCENT;
  }
  if (calculatorInput.value < MIN_VALUE || calculatorInput.value > MAX_VALUE) {
    return calculatorInput.value * 0;
  }
};

const getMonthlyResult = () => {
  monthlyResult.textContent = Math.floor(getFinalPriceMonth() * 100) / 100 * SIX_MONTHS.value;
};

const getYearResult = () => {
  yearResult.textContent = Math.floor(getFinalPriceYear() * 100) / 100 * AT_THE_END_PAYMENT.value;
};

const getSixMonthResult = () => {
  monthlyResult.textContent = Math.floor(getFinalPriceMonth() * 100) / 100 * SIX_MONTHS.value;
  yearResult.textContent = Math.floor(getFinalPriceYear() * 100) / 100 * AT_THE_END_PAYMENT.value;
};

const getTwelveMonthResult = () => {
  monthlyResult.textContent = Math.floor(getFinalPriceMonth() * 100) / 100 * TWELVE__MONTHS.value;
  yearResult.textContent = Math.floor(getFinalPriceYear() * 100) / 100 * TWELVE__MONTHS.value;
};

const getAtTheEndResult = () => {
  monthlyResult.textContent = Math.floor(getFinalPriceMonth() * 100) / 100 * SIX_MONTHS.value;
  yearResult.textContent = Math.floor(getFinalPriceYear() * 100) / 100 * AT_THE_END_PAYMENT.value;
};

const getMonthlyPaymentResult = () => {
  monthlyResult.textContent = Math.floor(getFinalPriceMonth() * 100) / 100 * MONTLY_PAYMENT.value;
  yearResult.textContent = Math.floor(getFinalPriceYear() * 100) / 100 * MONTLY_PAYMENT.value;
};

calculatorInput.addEventListener(`input`, getMonthlyResult);
calculatorInput.addEventListener(`input`, getYearResult);

SIX_MONTHS.addEventListener("click", getSixMonthResult);
TWELVE__MONTHS.addEventListener("click", getTwelveMonthResult);
AT_THE_END_PAYMENT.addEventListener("click", getAtTheEndResult);
MONTLY_PAYMENT.addEventListener("click", getMonthlyPaymentResult);
