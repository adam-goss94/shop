import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Tshirts } from './components/views/Tshirts/Tshirts';
import { Hoodies } from './components/views/Hoodies/Hoodies';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/tshirts' component={Tshirts} />
          <Route exact path='/hoodies' component={Hoodies} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export { App };
