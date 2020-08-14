import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux.js';

import styles from './Products.module.scss';
import {Product} from '../../common/Product/Product';

class Component extends React.Component {

  render() {
    const { products, category } = this.props;
    const filteredProducts = products.filter(function(el) {return el.category === category;});

    return (
      <div className={styles.root}>
        { filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.id} {...product} />
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
