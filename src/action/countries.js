import axios from 'axios';

import {
  ROOT,
  REQUEST_COUNTRIES,
  RECEIVE_COUNTRIES,
  REQUEST_COUNTRY,
  RECEIVE_COUNTRY,
  REQUEST_EU_COUNTRIES,
  RECEIVE_EU_COUNTRIES,
  
} from "./types";


export const fetchCountries = () => async dispatch => {
  try {
    dispatch({ type: REQUEST_COUNTRIES });
    const res = await axios.get(`${ROOT}/all`);
    dispatch({ type: RECEIVE_COUNTRIES, payload: res.data });
  } catch(e) {
    console.log(e);
    dispatch({ type: RECEIVE_COUNTRIES, payload: [] });
  }
};


export const fetchCountry = name => async dispatch => {
  try {
    dispatch({ type: REQUEST_COUNTRY });
    const res = await axios.get(`${ROOT}/name/${name}`);
    dispatch({ type: RECEIVE_COUNTRY, payload: res.data[0] });
  } catch(e) {
      console.log(e);
    dispatch({ type: RECEIVE_COUNTRY, payload: {} });
  }
};

export const fetchCountriesEu = () => async dispatch => {
  console.log('fetchCountriesEu')
  try {
    dispatch({ type: REQUEST_EU_COUNTRIES });
    const res = await axios.get(`${ROOT}/regionalbloc/eu`);
    dispatch({ type: RECEIVE_EU_COUNTRIES, payload: res.data });
  } catch(e) {
    console.log(e);
    dispatch({ type: RECEIVE_EU_COUNTRIES, payload: [] });
  }
};