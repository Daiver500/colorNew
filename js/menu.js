"use strict";

const mediaQuery = window.matchMedia(`(max-width: 1023px)`);
const navigationMenu = document.querySelector(".navigation__list");
const navigationButton = document.querySelector(".navigation__toggle-mobile");
const navigationButtonOpenClose = document.querySelectorAll(".navigation__toggle-mobile svg");


if (mediaQuery.matches) {
  navigationMenu.classList.add("hidden");
}

const navigationTogglesHandler = () => {
  navigationMenu.classList.toggle("hidden");
  navigationButtonOpenClose.forEach((item) => {
    item.classList.toggle("hidden");
  });
  document.body.classList.toggle(`no-scroll`);
  navigationMenu.classList.toggle(`scroll`);
};

navigationButton.addEventListener("click", navigationTogglesHandler);
