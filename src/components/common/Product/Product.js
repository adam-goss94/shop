import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Product.module.scss';

const Component = ({className, id, title, category, description, price}) => (
  <div className={clsx(className, styles.root)}>
    <div>{title}</div>
    <div>{category}</div>
    <div>{description}</div>
    <div>{price}</div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
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
