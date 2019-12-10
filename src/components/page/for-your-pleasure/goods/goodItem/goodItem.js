import React from 'react';

const GoodItem = ({goodItem}) => {

  const {name, price, url,country} = goodItem;

  return (
    <div className="shop__item">
      <img src={url}
           alt={name}/>
      <div className="shop__item-title">
        {name}
      </div>
      <div className="shop__item-country">{country}</div>
      <div className="shop__item-price">{price}$</div>
    </div>

  )
};

export default GoodItem;