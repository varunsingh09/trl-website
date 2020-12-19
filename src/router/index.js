import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import MainLayout from "./../layouts/Main"

export default () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          {renderRoutes(Routes)}
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};