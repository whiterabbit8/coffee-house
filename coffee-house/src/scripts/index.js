import { menuBtn, navItem, toggleMenu, closeMenu } from "./burgerMenu";

menuBtn.addEventListener('click', toggleMenu);
navItem.forEach((item) => {
  item.addEventListener('click', closeMenu);
})
