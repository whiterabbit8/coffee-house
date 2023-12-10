export const menuBtn = document.querySelector('.burger-menu-btn');
export const navMenu = document.querySelector('.header__nav');
export const navItem = document.querySelectorAll('.header__nav li');

export const toggleMenu = () => {
  menuBtn.classList.toggle('active');
  navMenu.classList.toggle('show');
  document.body.classList.toggle('noscroll');
};

export const closeMenu = () => {
  menuBtn.classList.remove('active');
  navMenu.classList.remove('show');
  document.body.classList.remove('noscroll');
};
