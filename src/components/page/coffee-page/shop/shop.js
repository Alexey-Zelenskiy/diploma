import React, {Component} from "react";
import {coffeeError, ourCoffeeLoaded, coffeeRequested} from "../../../../actions";
import WithRestoService from "../../../hoc";
import {connect} from "react-redux";
import Spinner from "../../../spinner";
import Error from "../../../error";
import ShopItem from "./shopItem";

class Shop extends Component {

  componentDidMount() {
    const {RestoService, ourCoffeeLoaded, coffeeRequested, coffeeItems, coffeeError} = this.props;
    if (!coffeeItems.length) {
      coffeeRequested();
      RestoService.getCoffee()
        .then(res => ourCoffeeLoaded(res))
        .catch(coffeeError)
    }
  }

  render() {
    const {coffeeItems, loading, error} = this.props;
    if (loading) {
      return <Spinner/>
    }
    if (error) {
      return <Error/>
    }
    return (
      <>
        <div className="row">
          <div className="col-lg-4 offset-2">
            <form action="#" className="shop__search">
              <label className="shop__search-label">Looking for</label>
              <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input"/>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="shop__filter">
              <div className="shop__filter-label">
                Or filter
              </div>
              <div className="shop__filter-group">
                <button className="shop__filter-btn">Brazil</button>
                <button className="shop__filter-btn">Kenya</button>
                <button className="shop__filter-btn">Columbia</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="shop__wrapper">
              <ShopItem
                coffeeItem={this.props.coffeeItems}
                />
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = ({ourCoffee, loading, error}) => {
  return {
    coffeeItems:ourCoffee,
    loading: loading,
    error: error
  }
};

const mapDispatchToProps = {
  coffeeRequested,
  ourCoffeeLoaded,
  coffeeError
};

export default WithRestoService()(connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop));