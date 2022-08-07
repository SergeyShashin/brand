'use strict';

window.onload = () => {

  //Сделать фильтрации по размерам (подрузку из файла соответсвующих товаров)
  let sizeInputsEl = document.getElementById('sizeInputs');
  sizeInputsEl.addEventListener('click', e => getProductsByFilter(e));
  function getProductsByFilter(e) {
    if (e.target.tagName === 'INPUT') {
      console.log(e.target.value);
    }
  }

  //Сделать загрузку товаров
  let productsEl = document.getElementById('products');
  productsLoad(productsEl);
  function productsLoad() {
    console.log(`Сделать в ${productsEl} загрузку товаров из json или ещё от куда-нибудь!`);
  }

  //Сделать добавление в корзину
  productsEl.addEventListener('click', e => addToCart(e))
  function addToCart(e) {
    event.preventDefault();
    if (e.target.tagName === 'SPAN')
      console.log(`Добавить в корзину этот товар. Предварительно добавить СПАНу Id.`);
  }

}