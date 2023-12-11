import{m as o,t as d,n as m,c as g}from"./burgerMenu-3w-IrQEJ.js";const p={coffee:[{name:"Irish coffee",description:"Fragrant black coffee with Jameson Irish whiskey and whipped milk",price:"$7.00",image:"./src/assets/images/coffee/coffee-1.png"},{name:"Kahlua coffee",description:"Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",price:"$7.00",image:"./src/assets/images/coffee/coffee-2.png"},{name:"Honey raf",description:"Espresso with frothed milk, cream and aromatic honey",price:"$5.50",image:"./src/assets/images/coffee/coffee-3.png"},{name:"Ice cappuccino",description:"Cappuccino with soft thick foam in summer version with ice",price:"$5.00",image:"./src/assets/images/coffee/coffee-4.png"},{name:"Espresso",description:"Classic black coffee",price:"$4.50",image:"./src/assets/images/coffee/coffee-5.png"},{name:"Latte",description:"Espresso coffee with the addition of steamed milk and dense milk foam",price:"$5.50",image:"./src/assets/images/coffee/coffee-6.png"},{name:"Latte macchiato",description:"Espresso with frothed milk and chocolate",price:"$5.50",image:"./src/assets/images/coffee/coffee-7.png"},{name:"Coffee with cognac",description:"Fragrant black coffee with cognac and whipped cream",price:"$6.50",image:"./src/assets/images/coffee/coffee-8.png"}],tea:[{name:"Moroccan",description:"Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",price:"$4.50",image:"./src/assets/images/tea/tea-1.png"},{name:"Ginger",description:"Original black tea with fresh ginger, lemon and honey",price:"$5.00",image:"./src/assets/images/tea/tea-2.png"},{name:"Cranberry",description:"Invigorating black tea with cranberry and honey",price:"$5.00",image:"./src/assets/images/tea/tea-3.png"},{name:"Sea buckthorn",description:"Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",price:"$5.00",image:"./src/assets/images/tea/tea-4.png"}],dessert:[{name:"Marble cheesecake",description:"Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",price:"$3.50",image:"./src/assets/images/dessert/dessert-1.png"},{name:"Marble cheesecake",description:"Layer cake with cream cheese frosting",price:"$4.00",image:"./src/assets/images/dessert/dessert-2.png"},{name:"Cheesecakes",description:"Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",price:"$4.50",image:"./src/assets/images/dessert/dessert-3.png"},{name:"Creme brulee",description:"Delicate creamy dessert in a caramel basket with wild berries",price:"$4.00",image:"./src/assets/images/dessert/dessert-4.png"},{name:"Pancakes",description:"Tender pancakes with strawberry jam and fresh strawberries",price:"$4.50",image:"./src/assets/images/dessert/dessert-5.png"},{name:"Honey cake",description:"Classic honey cake with delicate custard",price:"$4.50",image:"./src/assets/images/dessert/dessert-6.png"},{name:"Chocolate cake",description:"Cake with hot chocolate filling and nuts with dried apricots",price:"$5.50",image:"./src/assets/images/dessert/dessert-7.png"},{name:"Black forest",description:"A combination of thin sponge cake with cherry jam and light chocolate mousse",price:"$6.50",image:"./src/assets/images/dessert/dessert-8.png"}]},t=document.querySelector(".menu__tabs"),i=document.querySelector(".menu__grid");document.querySelectorAll(".tab-btn");let c;const f=s=>{const e=s.target.closest("button");if(e&&!e.classList.contains("active")){for(const a of t.children)a.classList.remove("active");c=e.textContent.trim().toLowerCase(),e.classList.add("active"),r(c)}},h=(s,e,a,n)=>`
          <div class="card">
            <div class="card__img-container">
              <img
                class="card__img"
                src=${n}
                alt=${s}
              />
            </div>
            <div class="card__description">
              <h3 class="card__header">${s}</h3>
              <p>${e}</p>
              <div class="card__price">${a}</div>
            </div>
          </div>
        `,r=(s="coffee")=>{i.innerHTML="",p[s].forEach(e=>{i.insertAdjacentHTML("beforeend",h(e.name,e.description,e.price,e.image))})};window.onload=()=>r();o.addEventListener("click",d);m.addEventListener("click",g);t.addEventListener("click",f);
