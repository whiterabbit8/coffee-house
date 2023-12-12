import { menuBtn, toggleMenu, closeMenu, navMenu } from './burgerMenu';
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
  alert('Hi there! Modal have not implemented. Please check later')
};
slide.addEventListener('mouseover', pauseTimer);
slide.addEventListener('mouseleave', resumeTimer);
slide.addEventListener('touchstart', (event) => {
  event.preventDefault();
  pauseTimer();
});
slide.addEventListener('touchend', resumeTimer);

menuBtn.addEventListener('click', toggleMenu);
navMenu.addEventListener('click', closeMenu);

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
