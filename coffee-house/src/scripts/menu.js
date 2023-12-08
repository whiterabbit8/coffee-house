const menuBtn = document.querySelector('.burger-menu-btn');

const toggleMenu = () => {
  menuBtn.classList.toggle('active')
}

menuBtn.addEventListener('click', toggleMenu);