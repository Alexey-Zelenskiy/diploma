import React from "react";

import beansLogo from './img/Beans_logo.svg'
import Navigation from "../../../navigation";

import './header.sass'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="preview">
        <div className="container">
          <Navigation/>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h1 className="title-big">Everything You Love About Coffee</h1>
              <img className="beanslogo" src={beansLogo} alt="Beans logo"/>
                <div className="preview__subtitle">We makes every day full of energy and taste</div>
                <div className="preview__subtitle">Want to try our beans?</div>
                <Link to='/coffee-page' className="preview__btn">More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default Header;