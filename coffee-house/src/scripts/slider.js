export const prevBtn = document.querySelector(".prev-btn");
export const nextBtn = document.querySelector(".next-btn");
export const currentSlide = document.querySelector(".slider__current");
export const slider = document.querySelector(".slider");
const controls = document.querySelectorAll(".slider__control");

const OFFSET = 550;
let slideNumber = 0;
let timer;

const switchControls = () => {
  controls.forEach((item) => {
    item.classList.remove("active");
  });
  controls[slideNumber].classList.add("active");
};

export const showNextSlide = () => {
  if (slideNumber === 2) {
    currentSlide.style.left = "0";
    slideNumber = 0;
  } else {
    let currentOffset = Number(currentSlide.style.left.replace("px", ""));
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
    let currentOffset = Number(currentSlide.style.left.replace("px", ""));
    currentSlide.style.left = `${(currentOffset += OFFSET)}px`;
    slideNumber -= 1;
  }
  switchControls();
  resetTimer();
};

export const startSlider = () => {
  timer = setInterval(showNextSlide, 5000);
};

const resetTimer = () => {
  clearInterval(timer);
  startSlider();
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
