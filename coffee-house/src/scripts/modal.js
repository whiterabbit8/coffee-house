import { category } from "./categories";
import { menuData } from "./menuData";

export const closeBtn = document.querySelector('.modal__btn');
const modal = document.querySelector('.modal');
const shadow = document.querySelector('.shadow');

let totalPrice = 0;

const showShadow = () => {
  shadow.style.top = `${window.scrollY}px`;
  shadow.classList.add('show');
};

const showModal = () => {
  modal.classList.add('show');
  modal.style.top = `${
    window.scrollY + (window.innerHeight - modal.offsetHeight) / 2
  }px`;
  modal.style.left = `${(window.innerWidth - modal.offsetWidth) / 2}px`;
};

export const openModal = (event) => {
  document.body.classList.add('noscroll');
  showShadow();
  showModal();
  createModal(event);
};

export const closeModal = () => {
  document.body.classList.remove('noscroll');
  shadow.classList.remove('show');
  modal.classList.remove('show');
};

const createModal = (event) => {
  const card = event.target.closest('.card');
  if (!card) return;
  const cardName = card.getAttribute('card-name');
  const product = menuData[category].filter((item) => item.name === cardName)[0];
  totalPrice = Number(product.price.replace('$', '')).toFixed(2);

  modal.querySelector('.modal__img').setAttribute('src', `${product.image}`);
  modal.querySelector('.modal__img').setAttribute('alt', `${product.name}`);

  modal.querySelector('.modal__header').textContent = `${cardName}`;
  modal.querySelector('.modal__description').textContent = `${product.description}`;
  modal.querySelector('#total-price').textContent = `$${totalPrice}`;
};
