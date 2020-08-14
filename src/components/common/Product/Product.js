import React from 'react';
import PropTypes from 'prop-types';

import styles from './Product.module.scss';

const Component = ({id, title, category, description, price, image}) => (
  <div className={styles.root}>
    <div>{title}</div>
    <div>{category}</div>
    <div>{description}</div>
    <div>{price}</div>
    <div>{image}</div>
  </div>
);

Component.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
};

export {
  Component as Product,
  Component as ProductComponent,
};
