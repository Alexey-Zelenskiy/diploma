import React, {Component} from 'react';
import {connect} from "react-redux";
import WithRestoService from "../../../hoc";
import {coffeeLoaded, coffeeRequested,coffeeError} from "../../../../actions";
import Spinner from "../../../spinner";
import Error from "../../../error";
import BestsellersItem from "./bestsellersItem";

class Bestsellers extends Component {

  componentDidMount() {
    const {RestoService, coffeeLoaded, coffeeRequested, bestItems, coffeeError} = this.props;
    if (!bestItems.length) {
      coffeeRequested();
      RestoService.getBestsellers()
        .then(res => coffeeLoaded(res))
        .catch(coffeeError)
    }
  }

  render() {
    const {bestItems, loading, error} = this.props;
    if (loading) {
      return <Spinner/>
    }
    if (error) {
      return <Error/>
    }
    return (
      <>
        <section className="best">
          <div className="container">
            <div className="title">Our best</div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="best__wrapper">
                  {bestItems.map((bestItem) => {
                    return <BestsellersItem
                      bestItem={bestItem}
                    />
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

const mapStateToProps = ({coffee, loading, error}) => {
  return {
    bestItems: coffee,
    loading: loading,
    error: error
  }
};

const mapDispatchToProps = {
  coffeeRequested,
  coffeeLoaded,
  coffeeError
};

export default WithRestoService()(connect(
  mapStateToProps,
  mapDispatchToProps
)(Bestsellers));