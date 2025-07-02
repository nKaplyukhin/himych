import {
    BURGER_BUTTON_CLASS,
    BURGER_CLOSE_BUTTON_CLASS,
    BURGER_MENU_ACTIVE_CLASS,
    BURGER_MENU_CLASS,
    BURGER_MENU_LINK_CLASS
} from "./constants";
import "./styles/styles.scss";

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