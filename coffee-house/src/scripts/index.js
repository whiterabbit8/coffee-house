import { menuBtn, navItem, toggleMenu, closeMenu } from './burgerMenu';
import {
  handleClick,
  nextBtn,
  pauseTimer,
  prevBtn,
  resumeTimer,
  showNextSlide,
  showPrevSlide,
  slide,
  startSlider,
} from './slider';

let startX;
let endX;

window.onload = () => {
  startSlider();
};
slide.addEventListener('mouseover', pauseTimer);
slide.addEventListener('mouseleave', resumeTimer);
slide.addEventListener('touchstart', (event) => {
  event.preventDefault();
  pauseTimer();
});
slide.addEventListener('touchend', resumeTimer);

menuBtn.addEventListener('click', toggleMenu);
navItem.forEach((item) => {
  item.addEventListener('click', closeMenu);
});

nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);

slide.addEventListener('mousedown', (event) => {
  event.preventDefault();
  startX = event.clientX;
});

slide.addEventListener('mouseup', (event) => {
  endX = event.clientX;
  handleClick(startX, endX);
});

slide.addEventListener('touchstart', (event) => {
  startX = event.touches[0].clientX;
});

slide.addEventListener('touchend', (event) => {
  endX = event.changedTouches[0].clientX;
  handleClick(startX, endX);
});
