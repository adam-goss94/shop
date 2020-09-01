import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart  } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux';
import styles from './PageNav.module.scss';

const Component = ( cart ) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col text-left ${styles.topLeft}`}>
          <h1>Shopline</h1>
        </div>
        <div className={`col text-right ${styles.topRigth}`}>
          <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/tshirts'>T-shirts</NavLink>
            <NavLink to='/hoodies'>Hoodies</NavLink>
            <NavLink className={styles.cart} to='/cart'>
              <FontAwesomeIcon className={styles.icon} icon={faShoppingCart} />
              <div className={styles.counter}>{cart.cart.data.length}</div>
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

Component.propTypes = {
  cart: PropTypes.object,
};

const mapStateToProps = (state) => ({
  cart: getCart(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as PageNav,
  Component as PageNavComponent,
};
