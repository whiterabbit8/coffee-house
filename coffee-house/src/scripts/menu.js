const menuBtn = document.querySelector('.burger-menu-btn');
const navMenu = document.querySelector('.header__nav');

const toggleMenu = () => {
  menuBtn.classList.toggle('active');
  navMenu.classList.toggle('show');
  document.body.classList.toggle('noscroll');
}

menuBtn.addEventListener('click', toggleMenu);