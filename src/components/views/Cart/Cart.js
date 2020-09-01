import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Cart.module.scss';

const Component = ( cart ) => {
  const cartProducts = cart.cart.data;
  console.log(cartProducts);
  return (
    <div className={styles.root}>
      <h2>Cart</h2>
      {cartProducts.map((product) => (
        <div key={product._id} className={styles.product}>
          <img src={product.img} alt={product.title} />
          <p className={styles.title}>{product.title}</p>
          <span className={styles.price}>{product.price}$</span>
          <div className={styles.amount}>
            <p>Amount:</p>
            <input type='number' min='1' step='1' id='amount'></input>
          </div>
        </div>
      ))
      }

    </div>
  );
};

Component.propTypes = {
  cart: PropTypes.object,
};

const mapStateToProps = (state) => ({
  cart: getCart(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
