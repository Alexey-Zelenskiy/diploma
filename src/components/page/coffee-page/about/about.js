import React from 'react';

import beansLogoDark from './img/Beans_logo_dark.svg';
import coffeeGirl from './img/coffee_girl.jpg';

const About = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 offset-2">
          <img className="shop__girl" src={coffeeGirl} alt="girl"/>
        </div>
        <div className="col-lg-4">
          <div className="title">About our beans</div>
          <img className="beanslogo" src={beansLogoDark} alt="Beans logo"/>
          <div className="shop__text">
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            <br/><br/>
            Afraid at highly months do things on at. Situation recommend objection do intention<br/>
            so questions. <br/>
            As greatly removed calling pleased improve an. Last ask him cold feel<br/>
            met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
            is song that held help face.
          </div>
        </div>
      </div>
      <div className="line"/>
    </>
  )
};

export default About;
