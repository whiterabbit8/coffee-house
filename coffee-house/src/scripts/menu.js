import { menuBtn, toggleMenu, closeMenu, navMenu } from './burgerMenu';
import {
  cardsWrapper,
  loadBtn,
  menuTabs,
  setCategory,
  showCards,
  showCategory,
  showLoadMoreBtn,
} from './categories';
import { closeBtn, closeModal, openModal } from './modal';

window.onload = () => {
  showCategory();
};

window.addEventListener('resize', showLoadMoreBtn);

menuBtn.addEventListener('click', toggleMenu);
navMenu.addEventListener('click', closeMenu);

menuTabs.addEventListener('click', setCategory);

loadBtn.addEventListener('click', showCards);

cardsWrapper.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
