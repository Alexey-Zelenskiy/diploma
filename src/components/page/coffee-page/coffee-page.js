import React from "react";

import './coffeepage.sass'
import Header from "./header";
import About from "./about";
import Shop from "./shop";

const CoffeePage = () => {
  return (
    <>
      <Header/>
      <section className="shop">
        <div className="container">
          <About/>
          <Shop/>
        </div>
      </section>
    </>
  )
};
export default CoffeePage;