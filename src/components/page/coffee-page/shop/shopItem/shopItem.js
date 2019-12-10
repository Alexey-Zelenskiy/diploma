import React, {Component} from 'react';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {getSeparateCoffeeItem} from "../../../../../actions";

class ShopItem extends Component {

  onItemSelected = (id) => {
    const {getSeparateCoffeeItem} = this.props;
    this.props.history.push(id);
    getSeparateCoffeeItem(id)
  };

  render() {
    const {coffeeItem} = this.props;
    return (
      <>
        {coffeeItem.map((item)=>{
          return(
            <div className="shop__item" key={item.id} onClick={this.onItemSelected.bind(this,item.id)}>
              <img src={item.url}
                   alt={item.name}/>
              <div className="shop__item-title">
                {item.name}
              </div>
              <div className="shop__item-country">{item.country}</div>
              <div className="shop__item-price">{item.price}$</div>
            </div>
          )
        })}
      </>
    )
  }
}
const mapDispatchToProps = {
  getSeparateCoffeeItem
};

export default connect(null, mapDispatchToProps)(withRouter(ShopItem))