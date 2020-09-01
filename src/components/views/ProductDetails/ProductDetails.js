import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { connect } from 'react-redux';
import { getProduct } from '../../../redux/productsRedux';
import { addToCart } from '../../../redux/cartRedux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './ProductDetails.module.scss';

class Component extends React.Component {

  addToCartHandler = () => {
    this.props.addToCart(this.props.product);
  };

  render() {
    const { product } = this.props;
    const { addToCartHandler } = this;
    return (
      <div className={styles.root}>
        <h2>Additional Details</h2>
        <div className={styles.detailsWrapper}>
          <img src={product.img} alt={product.title} />
          <div className={styles.details}>
            <div className={styles.title}>
              <h3 className={styles.titleHeader}>{product.title}</h3>
              <span className={styles.titlePrice}>{product.price}$</span>
            </div>
            <div className={styles.description}>
              {product.description}
            </div>
            <div className={styles.submit}>
              <Button as={Link} to="/Cart" onClick={addToCartHandler}>Add to cart</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Component.propTypes = {
  product: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  addToCart: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  product: getProduct(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (payload) => dispatch(addToCart(payload)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as ProductDetails,
  Container as ProductDetails,
  Component as ProductDetailsComponent,
};
