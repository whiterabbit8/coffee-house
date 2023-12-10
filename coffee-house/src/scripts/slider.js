export const prevBtn = document.querySelector('.prev-btn');
export const nextBtn = document.querySelector('.next-btn');
export const currentSlide = document.querySelector('.slider__current');
export const slide = document.querySelector('.slider__content');
const sliderTimer = document.querySelectorAll('.slider__timer');
const controls = document.querySelectorAll('.slider__control');

const OFFSET = 550;
const DELAY = 5000;
let slideNumber = 0;
let timer;
let tempTimer;
let startTime;
let remainTime;

const switchControls = () => {
  controls.forEach((item) => {
    item.classList.remove('active');
  });
  controls[slideNumber].classList.add('active');
};

export const showNextSlide = () => {
  if (slideNumber === 2) {
    currentSlide.style.left = '0';
    slideNumber = 0;
  } else {
    let currentOffset = Number(currentSlide.style.left.replace('px', ''));
    currentSlide.style.left = `${(currentOffset -= OFFSET)}px`;
    slideNumber += 1;
  }
  switchControls();
  resetTimer();
};

export const showPrevSlide = () => {
  if (slideNumber === 0) {
    currentSlide.style.left = `-${OFFSET * 2}px`;
    slideNumber = 2;
  } else {
    let currentOffset = Number(currentSlide.style.left.replace('px', ''));
    currentSlide.style.left = `${(currentOffset += OFFSET)}px`;
    slideNumber -= 1;
  }
  switchControls();
  resetTimer();
};

export const handleClick = (start, end) => {
  const minDist = 100;
  const dist = start - end;
  if (Math.abs(dist) > minDist && dist > 0) {
    showNextSlide();
  } else if (Math.abs(dist) > minDist && dist < 0) {
    showPrevSlide();
  }
};

export const startSlider = () => {
  startTime = Date.now();
  remainTime = DELAY;
  timer = setInterval(showNextSlide, DELAY);
};

export const pauseTimer = () => {
  sliderTimer[slideNumber].classList.add('paused');
  clearInterval(timer);
  clearTimeout(tempTimer);
  remainTime -= Date.now() - startTime;
};

export const resumeTimer = () => {
  sliderTimer[slideNumber].classList.remove('paused');
  tempTimer = setTimeout(() => {
    startTime = Date.now();
    showNextSlide();
  }, remainTime);
  startSlider();
};

const resetTimer = () => {
  clearInterval(timer);
  startSlider();
};