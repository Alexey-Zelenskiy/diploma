import React, {Component} from "react";
import {coffeeError, pleasureCoffeeLoaded, coffeeRequested} from "../../../../actions";
import WithRestoService from "../../../hoc";
import {connect} from "react-redux";
import Spinner from "../../../spinner";
import Error from "../../../error";
import GoodItem from "./goodItem";

class Goods extends Component {

  componentDidMount() {
    const {RestoService, pleasureCoffeeLoaded, coffeeRequested, goodItems, coffeeError} = this.props;
    if (!goodItems.length) {
      coffeeRequested();
      RestoService.getGoods()
        .then(res => pleasureCoffeeLoaded(res))
        .catch(coffeeError)
    }
  }

  render() {
    const {goodItems, loading, error} = this.props;
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
            <form action="#" class="shop__search">
              <label className="shop__search-label" for="filter">Looking for</label>
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
              {goodItems.map(goodItem => {
                return <GoodItem
                  goodItem={goodItem}
                />
              })}
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = ({pleasureCoffee, loading, error}) => {
  return {
    goodItems:pleasureCoffee,
    loading: loading,
    error: error
  }
};

const mapDispatchToProps = {
  coffeeRequested,
  pleasureCoffeeLoaded,
  coffeeError
};

export default WithRestoService()(connect(
  mapStateToProps,
  mapDispatchToProps
)(Goods));