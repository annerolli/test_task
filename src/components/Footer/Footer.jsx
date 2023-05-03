import './Footer.css';
import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as VK} from '../../assets/svg/vk.svg';
import {ReactComponent as TG} from '../../assets/svg/tg.svg';
import {ReactComponent as WA} from '../../assets/svg/whatsapp.svg';
import {ReactComponent as Planet} from '../../assets/svg/lang.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container">
        <div className='footer__title'>
        <Link to="/">
          <h1 className="header__title">QPICK</h1>
        </Link>
      </div>
      <ul className="footer__list">
        <li className='footer__list_item'>
          <Link to={'./like'}>
            Избранное
          </Link>
        </li>
        <li className='footer__list_item'>
          <Link to={'./cart'}>
            Корзина
          </Link>
        </li>
        <li className='footer__list_item'>
          <a href='#contact'>
            Контакты
          </a>
        </li>
      </ul>
      <div className="footer__info">
        <p className='footer__info_title'>Условия сервиса</p>
        <div className='footer__lang'>
          <span className="footer__lang_icon">
            <Planet/>
          </span>
          <ul className="footer__lang_list">
            <li className="footer__lang_item">
              <span>Рус</span>
            </li>
            <li className="footer__lang_item">
              Eng
            </li>
          </ul>
        </div>
      </div>
      <address className="footer__contact" name='contact'>
        <ul className='footer__contact_list'>
          <li className='footer__contact_item'>
            <a href='https://vk.com/' target='_blank' rel='noreferrer' className='footer__contact_link'>
              <VK aria-label='VK'/>
            </a>
          </li>
          <li className='footer__contact_item'>
            <a href='https://web.telegram.org/z/' target='_blank' rel='noreferrer' className='footer__contact_link'>
              <TG aria-label='Telegram'/>
            </a>
          </li>
          <li className='footer__contact_item'>
            <a href='https://web.whatsapp.com/' target='_blank' rel='noreferrer' className='footer__contact_link'>
              <WA aria-label='WhatsApp'/>
            </a>
          </li>
        </ul>
      </address>
      </div>
    </footer>
  );
};