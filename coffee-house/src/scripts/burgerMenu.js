export const menuBtn = document.querySelector('.burger-menu-btn');
export const navMenu = document.querySelector('.header__nav');

export const toggleMenu = () => {
  menuBtn.classList.toggle('active');
  navMenu.classList.toggle('show');
  document.body.classList.toggle('noscroll');
};

export const closeMenu = (event) => {
  let navItem = event.target.closest('li');
  if (!navItem) return;
  menuBtn.classList.remove('active');
  navMenu.classList.remove('show');
  document.body.classList.remove('noscroll');
};
