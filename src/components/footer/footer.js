import React from "react";

import logoBlack from './img/Logo_black.svg';
import beansLogoDark from './img/Beans_logo_dark.svg'

import './footer.sass'
import {Link} from "react-router-dom";

const Footer = () =>{
  return(
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-4">
              <ul className="footer">
                <li className="footer__item">
                  <Link to='/'>
                    <img src={logoBlack} alt="logo"/>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to='/coffee-page'>Our coffee</Link>
                </li>
                <li className="footer__item">
                  <Link to='/for-your-pleasure'>For your pleasure</Link>
                </li>
              </ul>
            </div>
          </div>
          <img className="beanslogo" src={beansLogoDark} alt="Beans logo"/>
        </div>
      </footer>
      </>
  )
};
export default Footer;