/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./constants.js
const BURGER_BUTTON_CLASS = "burger__button"
const BURGER_CLOSE_BUTTON_CLASS = "burger-menu__close"
const BURGER_MENU_CLASS = "burger-menu"
const BURGER_MENU_ACTIVE_CLASS = "burger-menu__active"
const BURGER_MENU_LINK_CLASS = "menu__link"
;// CONCATENATED MODULE: ./index.js



const getElementFromClassname = (className, parent = document) => parent.querySelector(`.${className}`)
const getElementsFromClassname = (className, parent = document) => parent.querySelectorAll(`.${className}`)


const handleChangeVisibleBurgerMenu = (e) => {
    const burgerNemu = getElementFromClassname(BURGER_MENU_CLASS)

    if (!BURGER_MENU_CLASS) {
        return
    }

    burgerNemu.classList.toggle(BURGER_MENU_ACTIVE_CLASS)
}

const handleBurgerLinkClick = () => {
    const burgerNemu = getElementFromClassname(BURGER_MENU_CLASS)
    burgerNemu.classList.remove(BURGER_MENU_ACTIVE_CLASS)
}

document.addEventListener("DOMContentLoaded", () => {
    const burgerButton = getElementFromClassname(BURGER_BUTTON_CLASS);
    const burgerLinks = getElementsFromClassname(BURGER_MENU_LINK_CLASS);
    const closeBurgerButton = getElementFromClassname(BURGER_CLOSE_BUTTON_CLASS);

    burgerButton.addEventListener("click", handleChangeVisibleBurgerMenu)
    closeBurgerButton.addEventListener("click", handleChangeVisibleBurgerMenu)

    burgerLinks.forEach(burgerLink => {
        burgerLink.addEventListener("click", handleBurgerLinkClick)
    })
})
/******/ })()
;
//# sourceMappingURL=main.js.map