import React from 'react';
import { Products } from '../../features/Products/Products';

import styles from './Tshirts.module.scss';

const Component = () => (
  <div className={styles.root}>
    <h2>Tshirts</h2>
    <Products category='T-shirt' />
  </div>
);

export {
  Component as Tshirts,
  Component as TshirtsComponent,
};
