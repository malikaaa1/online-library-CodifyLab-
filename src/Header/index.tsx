import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../button/index';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import translation from './translate';
import { FormControl, Select } from '@material-ui/core';
import { ReactComponent as CloseMenu } from '../shared/icons/x.svg';
import { ReactComponent as MenuIcon } from '../shared/icons/menu.svg';
import "./index.scss"


const menuItems = [
  { to: '/', label: translation.en['Our books'], about: true },
  { to: '/services', label: translation.en.Services },
  { to: '/contact', label: translation.en.Contacts },
];

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  const handleLanguageChange = async (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const lang = '' + event.target.value;
    await i18n.changeLanguage(lang);
  };



  return (
    <header className="header">
      <div className="mobile_menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu_icon" />
        ) : (
          <MenuIcon className="menu_icon" />
        )}
      </div>
      <div className="logo_nav">
        <div className="logo_container">
          <Link to='/'>
            <img className='logo' src="https://basmo.app/wp-content/uploads/2021/12/books-vs-internet.webp" alt="logo" />
          </Link>
          <Link to="/" >
            <span className='logoType'>KYOBO</span>
          </Link>
        </div>
        <ul
          className={
            click
              ? ["nav_options", "active"].join(' ')
              : "nav_options" }>
          {menuItems.map(({ to, label, about }) => {
            return about ? (
              <li key={label} className={`${"option"} ${"about"}`}>
                <Link to={to}>
                  {t(label)}
                </Link>
              </li>
            ) : (
              <li
                key={label}
                onClick={closeMobileMenu}
                className={"option"}>
                <Link
                  to={to}
                  className={`${"option"} ${to === pathname && "active"}`} >
                  {t(label)}
                </Link>
              </li>
            );
          })}
          <li>
            <FormControl className="lang_form_control">
              <Select
                className="lang_selector"
                disableUnderline
                native
                value={i18n.language}
                onChange={handleLanguageChange}
                inputProps={{
                  name: 'lang',
                  id: 'lang-native-simple',
                }}>
                <option key={'en'} value={'en'}>EN</option>
                <option key={'ru'} value={'ru'}>RU</option>
              </Select>
            </FormControl>
          </li>
          <li>
            <Link to='/login'>
              <ButtonComponent onClick={() => null}>
                {t('Login')}{' '}
              </ButtonComponent>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
