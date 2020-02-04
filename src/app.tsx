import './style/global.css';
import '@babel/polyfill';

import React, { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import WebFont from 'webfontloader';

const App: FunctionComponent = () => {
  WebFont.load({
    google: {
      families: ['Poppins'],
    },
  });

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(): JSX.Element => (
          <h1>Hello World!</h1>
        )}
      />
    </Switch>
  );
};

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
);
