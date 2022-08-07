'use strict';


let goodsCartEl = document.getElementById('goodsCart');
console.log(goodsCartEl);

//Удаление товара, изменение количества
goodsCartEl.addEventListener('click', e => modifyQuantityProduct(e));

function modifyQuantityProduct(e) {
  console.log(e);
  switch (e.target.tagName) {
    case 'BUTTON':
      deleteProduct();
      break;
    case 'INPUT':
      modifyQuantity();
      break;
  }

  function deleteProduct() {
    console.log('Удали продукт');
  }

  function modifyQuantity() {
    console.log(`Измени количество`);
  }
}

//Очисти корзину
let cleanCartEl = document.getElementById('cleanCart');
cleanCartEl.addEventListener('click', e => cleanCart());
function cleanCart() {
  console.log('Очисти корзину');
}

