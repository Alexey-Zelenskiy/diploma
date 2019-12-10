import React from "react";

import logo from './img/Logo.svg'

import './header.sass'
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <header>
            <ul className="header">
              <li className="header__item">
                <Link to='/'>
                  <img src={logo} alt="logo"/>
                </Link>
              </li>
              <li className="header__item">
                <Link to='/coffee-page'>Our coffee</Link>
              </li>
              <li className="header__item">
                <Link to='/for-your-pleasure'>For your pleasure</Link>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </>
  )
};
export default Navigation;