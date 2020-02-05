import './style/global.css';
import '@babel/polyfill';

import React, { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import WebFont from 'webfontloader';
import icon from './assets/icon_white.svg';
import logo from './assets/logo_white.svg';

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
          <div className="container">
            <img src={logo} className="logo" alt="Tirette logo" width="98" height="32" />
            <img src={icon} className="icon" alt="Tirette icon" width="41" height="32" />
            <h1>Coming Soon!</h1>
            <span />
            <p>
              Tirette, pick-pocket proof jeans!
              <br />
              Coming this spring!
            </p>
          </div>
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
