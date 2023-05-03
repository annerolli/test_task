import './Basket.css';
import React from "react";
import { ReactComponent as Delete} from '../../assets/svg/delete.svg';
import {ReactComponent as Increment} from '../../assets/svg/increment.svg'
import {ReactComponent as Decrement} from '../../assets/svg/decrement.svg'

export const Basket = (props) => {
  const { cartItems, onAdd, onRemove, Remove } = props;
  if(cartItems.length === 0) {
    return <div style={{ minHeight: '69.2vh' }}>Корзина пуста</div>
  }
  const itemsPrice = cartItems.reduce((a, c) => a + c.count * c.actual_price, 0);
  console.log(itemsPrice)
  return (
    <div className="basket">
      <div className='title basket__title'>
        Корзина
      </div>

      <main className="basket__main">
        <div className="basket__container">
          <ul className="basket__list">
            {cartItems.map((item) => (
            <li key={item.id} className="basket__item">
              <div className="basket__item_container">
                <div className='basket__poster'>
                  <img className="basket__image" src={item.image} alt={item.title} />
                </div>
                <div className="basket__count">
                  <button
                    type='button'
                    onClick={() => onRemove(item)}
                    className="basket__button basket__button--increment"
                  >
                    <Decrement/>
                  </button>
                    <span className='basket__item_count'>
                      {item.count}
                    </span>
                  <button 
                    type='button'
                    onClick={() => onAdd(item)} 
                    className="basket__button basket__button--decrement"
                  >
                    <Increment/>
                  </button>
                </div>
              </div>
              <div className="basket__info">
                <div className="basket__item_title">
                  {item.title}
                </div>
                <span className='basket__price'>{item.actual_price}₽</span>
              </div>
              <div className="basket__action">
                <button type='button' className="basket__button_delete">
                  <Delete onClick={() => Remove(item)}/>
                </button>
                <div className="basket__price basket__price--focus">
                  {item.actual_price * item.count} ₽
                </div>
              </div>
            </li>
          ))}
          </ul>
        </div>
        <div className="basket__total">
          <div className="basket__total_info">
            <div className='basket__total_title'>
              <p>ИТОГО</p>
            </div>
            <div className="basket__total_price">
              <p>₽{itemsPrice}</p>
            </div>
          </div>
          <button className="basket__button_total" onClick={() => alert("Заказ обрабатывется")}>
            Перейти к оформлению
          </button>
        </div>
      </main>
    </div>
  );
}