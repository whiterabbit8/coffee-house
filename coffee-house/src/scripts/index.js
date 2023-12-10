import { menuBtn, navItem, toggleMenu, closeMenu } from "./burgerMenu";
import {
  handleClick,
  nextBtn,
  prevBtn,
  showNextSlide,
  showPrevSlide,
  slider,
  startSlider,
} from "./slider";

let startX;
let endX;

window.onload = function start() {
  startSlider();
};

menuBtn.addEventListener("click", toggleMenu);
navItem.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

nextBtn.addEventListener("click", showNextSlide);
prevBtn.addEventListener("click", showPrevSlide);

slider.addEventListener("mousedown", (event) => {
  event.preventDefault();
  startX = event.clientX;
});

slider.addEventListener("mouseup", (event) => {
  endX = event.clientX;
  handleClick(startX, endX);
});

slider.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX;
});

slider.addEventListener("touchend", (event) => {
  endX = event.changedTouches[0].clientX;
  handleClick(startX, endX);
});
