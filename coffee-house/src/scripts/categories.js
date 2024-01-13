import { menuData } from './menuData';

export const menuTabs = document.querySelector('.tabs');
export const loadBtn = document.querySelector('.load-btn');
export const cardsWrapper = document.querySelector('.menu__grid');

export let category = 'coffee';

export const setCategory = (event) => {
  console.log(1);
  const btn = event.target.closest('button');
  if (!btn) return;
  if (btn.classList.contains('active')) return;
  for (const child of menuTabs.children) {
    child.classList.remove('active');
  }
  category = btn.textContent.trim().toLowerCase();
  btn.classList.add('active');
  showCategory(category);
};

const createCard = (name, description, price, image) => {
  return `
          <div class="card" card-name="${name}">
            <div class="card__img-container">
              <img
                class="card__img"
                src=${image}
                alt="${name}"
              >
            </div>
            <div class="card__description">
              <h3>${name}</h3>
              <p>${description}</p>
              <div class="card__price">${price}</div>
            </div>
          </div>
        `;
};

export const showCategory = (category = 'coffee') => {
  cardsWrapper.innerHTML = '';
  menuData[category].forEach((element) => {
    cardsWrapper.insertAdjacentHTML(
      'beforeend',
      createCard(
        element.name,
        element.description,
        element.price,
        element.image
      )
    );
  });
  showLoadMoreBtn();
};

export const showLoadMoreBtn = () => {
  if (window.innerWidth < 769) {
    if (menuData[category].length > 4) {
      loadBtn.classList.add('show');
      hideCards();
    } else {
      showCards();
    }
  } else {
    showCards();
  }
};

const hideCards = () => {
  const cards = document.querySelectorAll('.card');
  const showedQuantity = 4;
  for (let i = showedQuantity; i < cards.length; i++) {
    cards[i].classList.add('hide');
  }
};

export const showCards = () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.classList.remove('hide');
  });
  loadBtn.classList.remove('show');
};
