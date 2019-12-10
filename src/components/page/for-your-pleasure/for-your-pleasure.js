import React from "react";
import Header from "./header";
import About from "./about";
import Goods from "./goods/goods";

const ForYourPleasure =()=>{
  return(
    <>
      <Header/>
      <section className="shop">
        <div className="container">
      <About/>
      <Goods/>
        </div>
      </section>
      </>
  )
};
export default ForYourPleasure;