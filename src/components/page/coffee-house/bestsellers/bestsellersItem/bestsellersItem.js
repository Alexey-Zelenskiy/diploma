import React from 'react';

const BestsellersItem = ({bestItem}) => {

  const {name, price, url} = bestItem;

  return (
    <div className="best__item">
      <img
        src={url}
        alt={name}/>
      <div className="best__item-title">
        {name}
      </div>
      <div className="best__item-price">{price}$</div>
    </div>
  )
};

export default BestsellersItem;