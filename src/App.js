import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import MainLayout from "./layouts/Main"

const App = ({ route }) => (
  <MainLayout>
    <Header />
    {renderRoutes(route.routes)}
  </MainLayout>
);

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
  route: null,
};

export default { component: App };
