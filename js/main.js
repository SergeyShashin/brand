'use strict';

window.onload = () => {
  //Сделать поиск
  let searchEl = document.getElementById('search');
  searchEl.onchange = () => {
    console.log(`Сделать поиск! Ввели ${searchEl.value}`)
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

  //Добавить емейл в базу подписок
  let buttonSubscribeEl = document.getElementById('button-subscribe');
  buttonSubscribeEl.addEventListener('click', (e) => addToSubscribe(e));
  function addToSubscribe(e) {
    console.log(`Добавить в базу подписок емейл ${e.target.previousElementSibling.value}`);
  }




}