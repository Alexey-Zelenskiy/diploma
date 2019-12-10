import React, {Component} from 'react'
import {connect} from 'react-redux'
import {coffeeFilter} from "../../../../actions";


class SearchForm extends Component {

  onInputChange = (event) => {
    this.props.coffeeFilter(event.target.value)
  };

  onFormSubmit = (e) => {
    e.preventDefault()
  };

  render() {
    return (
      <div className="col-lg-4 offset-2">
        <form onSubmit={this.onFormSubmit} className="shop__search">
          <label className="shop__search-label">Looking for</label>
          <input onChange={this.onInputChange} type="text" placeholder="start typing here..."
                 className="shop__search-input"/>
        </form>
      </div>
    )
  }

}

const mapDispatchToProps = {
  coffeeFilter
};

export default connect(null, mapDispatchToProps)(SearchForm)