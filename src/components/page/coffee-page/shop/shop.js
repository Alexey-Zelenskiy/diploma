import React, {Component} from "react";
import {coffeeError, coffeeRequested, ourCoffeeLoaded} from "../../../../actions";
import WithRestoService from "../../../hoc";
import {connect} from "react-redux";
import Spinner from "../../../spinner";
import Error from "../../../error";
import ShopItem from "./shopItem";
import SearchPanel from "../search-panel/search-panel";

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

  filterPosts = () => {
    const {coffeeItems, filterValue} = this.props;
    if (filterValue === null) return coffeeItems;
    return coffeeItems.filter(item => {
      return item.name.toLowerCase().indexOf(filterValue) > -1
        || item.country.toLowerCase().indexOf(filterValue.toLowerCase()) > -1
    })
  };

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
        <SearchPanel labelBtn={coffeeItems}/>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="shop__wrapper">
              <ShopItem
                coffeeItem={this.filterPosts()}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = ({ourCoffee, loading, error, filterValue}) => {
  return {
    coffeeItems: ourCoffee,
    loading,
    error,
    filterValue
  }
};

const mapDispatchToProps = {
  coffeeRequested,
  ourCoffeeLoaded,
  coffeeError,
};

export default WithRestoService()(connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop));