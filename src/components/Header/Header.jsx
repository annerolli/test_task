import './Header.css';
import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Like} from '../../assets/svg/like.svg';
import {ReactComponent as Basket} from '../../assets/svg/card.svg';


export const Header = (props) => {
  return (
    <header className="header">
        <div className="header__container">
          <Link to="/">
            <h1 className="header__title">QPICK</h1>
          </Link>

          <div className="header__action">
            <Link to='/like'>
              <Like/>
              <span className="header__counter header__counter--like">2</span>
            </Link>
            <Link to='/cart' >
              <Basket/>
              {props.countCartItems ? (
              <span className="header__counter header__counter--basket">{props.countCartItems}</span>
            ) : (
              false
            )}
            </Link>
        </div>
        </div>
    </header>
  );
}