import { menuBtn, toggleMenu, closeMenu, navMenu } from './burgerMenu';
import { loadBtn, setCategory, showCards, showCategory, showLoadMoreBtn, tabs } from './categories';

window.onload = () => {
  showCategory();
};

window.addEventListener('resize', showLoadMoreBtn);

menuBtn.addEventListener('click', toggleMenu);
navMenu.addEventListener('click', closeMenu);

tabs.addEventListener('click', setCategory);

loadBtn.addEventListener('click', showCards);
