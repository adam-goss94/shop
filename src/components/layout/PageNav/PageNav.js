import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart  } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';

import styles from './PageNav.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className='container'>
      <div className='row'>
        <div className={`col text-left ${styles.topLeft}`}>
          <h1>TUTAJ LOGO</h1>
        </div>
        <div className={`col text-right ${styles.topRigth}`}>
          <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/tshirts'>T-shirts</NavLink>
            <NavLink to='/hoodies'>Hoodies</NavLink>
            <NavLink className={styles.cart} to='/cart'>
              <FontAwesomeIcon className={styles.icon} icon={faShoppingCart} />
              <div className={styles.counter}>0</div>
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as PageNav,
  Component as PageNavComponent,
};
