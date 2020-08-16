import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountriesEu } from "../../action/countries";
import { Loading } from '../../common';
import CountriesItem from './CountriesItem';

const m = ({ countries }) => ({ countries });

class CityDetails extends Component {

  static fetching ({ dispatch }) {
    return [dispatch(fetchCountriesEu())];
  }

  componentDidMount() {
    this.props.fetchCountriesEu();
  }


  render() {
    const { countries: { isFetching, data } } = this.props;

    if(isFetching) {
      return <Loading />
    }

    return(
      <div className="container">
        <div className="countries-container">
         {data.map((item, i) => <CountriesItem key={i} {...item} />)}
        </div>
      </div>
    );
  }
};


export default connect(m, { fetchCountriesEu })(CityDetails)