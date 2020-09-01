import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';
import { connect } from 'react-redux';
import { getAll, fetchAllProducts } from './redux/productsRedux';
import { getCart, fetchCart } from './redux/cartRedux';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Tshirts } from './components/views/Tshirts/Tshirts';
import { Hoodies } from './components/views/Hoodies/Hoodies';
import { Cart } from './components/views/Cart/Cart';
import { ProductDetails } from './components/views/ProductDetails/ProductDetails';


class Component extends React.Component {
  static propTypes = {
    products: PropTypes.array,
    fetchAllProducts: PropTypes.func,
    fetchCart: PropTypes.func,
  };

  componentDidMount() {
    const { fetchAllProducts, fetchCart } = this.props;
    fetchAllProducts();
    fetchCart();
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/tshirts' component={Tshirts} />
              <Route exact path='/hoodies' component={Hoodies} />
              <Route exact path='/cart' component={Cart} />
              <Route path='/product/:id' component={ProductDetails} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  products: getAll(state),
  cart: getCart(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
  fetchCart: () => dispatch(fetchCart()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as App };
