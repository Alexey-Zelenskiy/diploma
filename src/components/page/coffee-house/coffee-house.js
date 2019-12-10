import React from "react";
import Header from "./header";

import './mainpage.sass'
import About from "./about";
import Bestsellers from "./bestsellers";

const CoffeeHouse = () => {
  return (
    <>
      <Header/>
      <About/>
      <Bestsellers/>
    </>
  )
};
export default CoffeeHouse;