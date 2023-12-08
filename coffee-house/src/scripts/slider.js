export const prevBtn = document.querySelector('.prev-btn');
export const nextBtn = document.querySelector('.next-btn');
export const currentSlide = document.querySelector('.slider__current');

const OFFSET = 550;
let slideNumber = 1;

export const showNextSlide = () => {
  if (slideNumber === 3) {
    currentSlide.style.left = '0';
    slideNumber = 1;
  } else {
    let currentOffset = Number(currentSlide.style.left.replace('px', ''));
    currentSlide.style.left = `${currentOffset -= OFFSET}px`;
    slideNumber += 1;
  }
}

export const showPrevSlide = () => {
  if (slideNumber === 1) {
    currentSlide.style.left = `-${OFFSET * 2}px`;
    slideNumber = 3;
  } else {
    let currentOffset = Number(currentSlide.style.left.replace('px', ''));
    currentSlide.style.left = `${currentOffset += OFFSET}px`;
    slideNumber -= 1;
  }
}