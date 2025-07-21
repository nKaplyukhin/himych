import Swiper from 'swiper';
import {
    BURGER_BUTTON_CLASS,
    BURGER_CLOSE_BUTTON_CLASS,
    BURGER_MENU_ACTIVE_CLASS,
    BURGER_MENU_CLASS,
    BURGER_MENU_LINK_CLASS
} from "./constants";
import "./styles/styles.scss";
import { Autoplay } from 'swiper/modules';

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
    const swiper = new Swiper(getElementFromClassname("swiper"), {
        modules: [Autoplay],
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            768: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
        },
        grabCursor: true,
        speed: 8000,
        autoplay: {
            delay: 0,
        },
    });
})
