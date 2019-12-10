import React from "react";

import './header.sass'
import Navigation from "../../../navigation";


const Header = () => {
  return (
    <>
      <div className="banner-pleasure">
        <div className="container">
          <Navigation/>
          <h1 className="title-big">For your pleasure</h1>
        </div>
      </div>
    </>
  )
};
export default Header;