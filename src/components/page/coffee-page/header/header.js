import React from "react";

import './header.sass'
import Navigation from "../../../navigation";

const Header = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <Navigation/>
          <h1 className="title-big">Our Coffee</h1>
        </div>
      </div>
    </>
  )
};
export default Header;