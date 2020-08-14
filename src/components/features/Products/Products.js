import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux.js';

import styles from './Products.module.scss';

class Component extends React.Component {

  render() {
    const { className, products, category } = this.props;
    const filteredProducts = products.filter(function(el) {return el.category === category;});

    return (
      <div className={clsx(className, styles.root)}>
        { filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>{product.category}</div>
          ))
        ) : null
        }
      </div>
    );
  }
}

Component.propTypes = {
  products: PropTypes.array,
  category: PropTypes.string,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  products: getAll(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Products,
  Container as Products,
  Component as ProductsComponent,
};
