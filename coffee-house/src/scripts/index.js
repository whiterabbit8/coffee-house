import { menuBtn, navItem, toggleMenu, closeMenu } from "./burgerMenu";
import { nextBtn, prevBtn, showNextSlide, showPrevSlide } from "./slider";

menuBtn.addEventListener('click', toggleMenu);
navItem.forEach((item) => {
  item.addEventListener('click', closeMenu);
})

nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);
