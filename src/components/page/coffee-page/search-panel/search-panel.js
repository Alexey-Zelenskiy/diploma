import React, {Component} from 'react'
import SearchForm from "./search-form";
import {coffeeFilter} from '../../../../actions'
import {connect} from 'react-redux'


class SearchPanel extends Component {

  onFilterClicked = (event) => {
    this.props.coffeeFilter(event.target.text)
  };

  render() {
    const {labelBtn} = this.props;
    const noRepeatedLabelBnt = labelBtn.map(({country}) => {
      return country
    });


    return (
      <div className="row">
        <SearchForm/>
        <div className="col-lg-4">
          <div className="shop__filter">
            <div className="shop__filter-label">
              Or filter
            </div>
            <div className="shop__filter-group">
              {
                [...new Set(noRepeatedLabelBnt)].map((item, index) => {
                  return (
                    <button className={'shop__filter-btn'} key={index}><a onClick={this.onFilterClicked}>{item}</a>
                    </button>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  coffeeFilter
};

export default connect(null, mapDispatchToProps)(SearchPanel)