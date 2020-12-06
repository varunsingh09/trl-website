import React from 'react';
import { hydrate } from 'react-dom';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';
// import '../scss/main.scss';
import "./assets/css/style.scss"
// import "./assets/css/custom.css"

hydrate(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector('#app')
);

