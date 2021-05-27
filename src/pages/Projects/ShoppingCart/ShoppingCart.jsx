import React, { useEffect, useState } from 'react';
import getProductList from './services/mercadoLivre';
import './index.css';

const ShoppingCart = () => {
  const enterKey = 13;
  const [list, setList] = useState([]);

  function getInfoFromProductItem(item) {
    const name = item.querySelector('span.item__title').innerText;
    const sku = item.querySelector('span.item__sku').innerText;
    const salePrice = item.querySelector('span.item__price').innerText;
    return { sku, name, salePrice };
  }

  function toLocalStorage({ sku, name, salePrice }) {
    let storage = JSON.parse(localStorage.getItem('MLP'));
    storage = { [sku]: { name, salePrice }, ...storage };
    localStorage.setItem('MLP', JSON.stringify(storage));
    return storage;
  }

  function sumCartPrices() {
    let cartPrice = 0;
    const store = localStorage.getItem('MLP');
    if (store !== null) {
      Object.entries(store).forEach((product) => {
        cartPrice += Number(product[1].salePrice);
      });
      document.querySelector('.total-price')
        .innerText = `${Math.round(cartPrice * 100) / 100}`;
    } else {
      document.querySelector('.total-price').innerText = 'Carrinho vazio';
    }
    return cartPrice;
  }

  function emptyCart() {
    localStorage.clear();
    document.querySelector('.cart__items').innerHTML = '';
    sumCartPrices();
  }

  function cartItemClickListener(evt) {
    evt.target.remove();
    localStorage.removeItem(evt.target.id);
    sumCartPrices();
  }

  function createCartItemElement({ sku, name, salePrice }) {
    const li = document.createElement('li');
    li.className = 'cart__item';
    li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
    li.id = `${sku}`;
    li.addEventListener('click', cartItemClickListener);
    document.querySelector('.cart__items').appendChild(li);
    toLocalStorage({ sku, name, salePrice });
    sumCartPrices();
    return li;
  }

  function retrieveLocalStorage() {
    const storageObject = JSON.parse(localStorage.getItem('MLP'));
    if (storageObject !== null) {
      Object.entries(storageObject).forEach((obj) => {
        const { sku, name, price } = obj[1];
        createCartItemElement({ sku, name, price });
      });
    }
  }

  function addToCart({ parentNode }) {
    const { sku, name, salePrice } = getInfoFromProductItem(parentNode);
    createCartItemElement({ sku, name, salePrice });
  }

  const searchAPI = async (evt) => {
    if (evt === 'computador' || evt.keyCode === enterKey || evt.type === 'click') {
      setList([]);
      const productList = await getProductList(
        document.querySelector('#search-input').value,
      );
      setList(productList);
    }
  };

  useEffect(() => {
    document.title = 'Mercado Libre Pirata';
    document.getElementById('favicon').href = './mlp.svg';
    searchAPI('computador');
    retrieveLocalStorage();
    return () => {
      document.title = 'Brenno\'s Portfolio';
    };
  }, []);

  return (
    <>
      <section className="search">
        <input
          id="search-input"
          size="50"
          type="text"
          defaultValue="computador"
          onChange={ (evt) => searchAPI(evt) }
          onKeyUp={ (evt) => searchAPI(evt) }
        />
        <button type="button" id="search-button" onClick={ (evt) => searchAPI(evt) }>
          Buscar
        </button>
      </section>
      <section className="container">
        <section className="items">
          { list.length === 0 ? 'loading...' : list.map((product) => (
            <section className="item" key={ product.id }>
              <span className="item__sku">{ product.id }</span>
              <span className="item__title">{ product.title }</span>
              <span className="item__price">{ product.price }</span>
              <img
                className="item__image"
                src={ product.thumbnail }
                alt={ product.title }
              />
              <button
                className="item__add"
                type="button"
                onClick={ ({ target }) => addToCart(target) }
              >
                Adicionar ao carrinho!
              </button>
            </section>
          )) }
        </section>
        <section className="cart">
          <span className="cart__title">Carrinho de compras</span>
          <button type="button" className="empty-cart" onClick={ () => emptyCart() }>
            Esvaziar carrinho
          </button>
          <ol className="cart__items" />
          <span className="total-price">Carrinho vazio</span>
        </section>
      </section>
    </>
  );
};

export default ShoppingCart;
