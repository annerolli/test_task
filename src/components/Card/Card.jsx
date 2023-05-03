import './Card.css';
import React from "react";
import {ReactComponent as Star} from '../../assets/svg/star.svg'

export const Card = (props) => {
  const { product, onAdd } = props;
  return (
    <div className="card">
      <div className='card__poster'>
        <img className="card__image" src={product.image} alt={product.title} />
      </div>
      
      <div className="card__info">
        <div className="card__left">
          <h3 className="card__title">{product.title}</h3>
          <div className="card__price_block">
            <div className="card__price">{product.actual_price} ₽</div>
          {product.price ? <div className="card__price card__price--crossed_out">{product.price + " ₽"}</div> : ''}
          </div>
        </div>
        <div className="card__right">
          <div className='card__subtitle'>
              <Star/>
              <span className='card__rate'>{product.rate}</span>
          </div>
            
          <div className="card__action">
            <p onClick={() => onAdd(product)}>Купить</p>
          </div>
        </div>
      </div>
    </div>
  );
}