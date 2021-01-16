import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Routes from '../Routes';
import serialize from 'serialize-javascript';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>,
  );

  let host = req.headers.host

  //   <script>
  //   window.INITIAL_STATE = ${serialize(store.getState())}
  // </script>
  return `
   <!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>TRL News-Sach ki aawaz</title>
        <link type="text/css" rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
       <link type="text/css" rel="stylesheet" href="https://trl-assets.s3.ap-south-1.amazonaws.com/style.css"/>
       </head>
        <body>
            <div id='root'>${content}</div>
           
            <script src='http://${host}/bundle.js'></script>
        </body>
    </html>
  `;
};


