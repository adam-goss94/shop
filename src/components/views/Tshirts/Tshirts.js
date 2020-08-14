import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { Products } from '../../features/Products/Products';

import styles from './Tshirts.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <h2>Tshirts</h2>
    <Products category='T-shirt' />
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Tshirts,
  Component as TshirtsComponent,
};
