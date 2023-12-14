import { category } from './categories';
import { menuData } from './menuData';

export const closeBtn = document.querySelector('.modal__btn');
const modal = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal-container');
export const shadow = document.querySelector('.shadow');
export const options = document.querySelector('.modal__options');
export const sizes = document.querySelector('#size');
const total = document.querySelector('#total-price');

let totalPrice = 0;
let product;
let sizePrice = 0;
let addPrice = 0;

const createSize = () => {
  const size = ['S', 'M', 'L'];
  let sizeValue;

  if (category === 'coffee' || category === 'tea') {
    sizeValue = ['100 ml', '200 ml', '300 ml'];
  } else if (category === 'dessert') {
    sizeValue = ['50 g', '100 g', '200 g'];
  }

  const sizeWrapper = document.createElement('div');
  sizeWrapper.id = 'size';
  const p = document.createElement('p');
  p.textContent = 'Size';
  sizeWrapper.appendChild(p);

  const tabs = document.createElement('div');
  tabs.className = 'tabs';

  size.forEach((item, i) => {
    const button = `
      <button class="tab-btn ${i === 0 ? 'active' : ''}">
        <span class="tab-btn__icon">${item}</span>
        <span>${sizeValue[i]}</span>
      </button>
    `;
    tabs.insertAdjacentHTML('beforeend', button);
  });

  sizeWrapper.appendChild(tabs);
  return sizeWrapper;
};

const createAdds = () => {
  const add = ['1', '2', '3'];
  let addValue;

  switch (category) {
    case 'coffee':
      addValue = ['Shugar', 'Cinnamon', 'Syrup'];
      break;
    case 'tea':
      addValue = ['Shugar', 'Lemon', 'Syrup'];
      break;
    case 'dessert':
      addValue = ['Berries', 'Nuts', 'Jam'];
      break;
    default:
      addValue = [];
      break;
  }

  const addWrapper = document.createElement('div');
  addWrapper.id = 'add';
  const p = document.createElement('p');
  p.textContent = 'Additives';
  addWrapper.appendChild(p);

  const tabs = document.createElement('div');
  tabs.className = 'tabs';

  add.forEach((item, i) => {
    const button = `
      <button class="tab-btn">
        <span class="tab-btn__icon">${item}</span>
        <span>${addValue[i]}</span>
      </button>
    `;
    tabs.insertAdjacentHTML('beforeend', button);
  });

  addWrapper.appendChild(tabs);
  return addWrapper;
};

const createModal = () => {
  totalPrice = Number(product.price.replace('$', ''));

  modal.querySelector('.modal__img').setAttribute('src', `${product.image}`);
  modal.querySelector('.modal__img').setAttribute('alt', `${product.name}`);

  modal.querySelector('.modal__header').textContent = `${product.name}`;
  modal.querySelector('.modal__description').textContent =
    `${product.description}`;

  options.innerHTML = '';
  options.appendChild(createSize());
  options.appendChild(createAdds());

  total.textContent = `$${totalPrice.toFixed(2)}`;
};

const showShadow = () => {
  modalWrapper.style.top = `${window.scrollY}px`;
  modalWrapper.classList.add('show');
  shadow.classList.add('show');
};

export const openModal = (event) => {
  const card = event.target.closest('.card');
  if (!card) return;

  const cardName = card.getAttribute('card-name');
  product = menuData[category].filter((item) => item.name === cardName)[0];

  createModal(event);

  document.body.classList.add('noscroll');
  showShadow();
  modal.classList.add('show');
};

export const closeModal = () => {
  document.body.classList.remove('noscroll');
  modalWrapper.classList.remove('show');
  shadow.classList.remove('show');
  modal.classList.remove('show');
};

const setSizePrice = (size) => {
  switch (size) {
    case 'S':
      sizePrice = 0;
      break;
    case 'M':
      sizePrice = 0.5;
      break;
    case 'L':
      sizePrice = 1;
      break;
    default:
      break;
  }
  total.innerHTML = `$${(totalPrice + addPrice + sizePrice).toFixed(2)}`;
};

export const setSize = (event) => {
  const button = event.target.closest('#size .tab-btn');
  if (!button) return;
  const sizeBtns = document.querySelectorAll('#size .tab-btn');
  sizeBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  button.classList.add('active');
  setSizePrice(button.querySelector('.tab-btn__icon').textContent);
};

export const setAdd = (event) => {
  const button = event.target.closest('#add .tab-btn');
  if (!button) return;
  if (button.classList.contains('active')) {
    addPrice -= 0.5;
    button.classList.remove('active');
  } else {
    addPrice += 0.5;
    button.classList.add('active');
  }
  total.innerHTML = `$${(totalPrice + addPrice + sizePrice).toFixed(2)}`;
};
