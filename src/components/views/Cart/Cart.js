import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Cart.module.scss';

const Component = ( cart ) => {
  const cartProducts = cart.cart.data;

  return (
    <div className={styles.root}>
      <h2>Cart</h2>
      {cartProducts.length > 0 ?
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <Form>
              <FormGroup>
                <Label for="clientName">Name</Label>
                <Input type="text" name="client" id="clientName" placeholder="John Doe" />
              </FormGroup>
              <FormGroup>
                <Label for="clienEmail">Email</Label>
                <Input type="email" name="email" id="clienEmail" placeholder="Johndo@example.com" />
              </FormGroup>
              <FormGroup>
                <Label for="address">Street</Label>
                <Input type="text" name="address" id="address" placeholder="Example 12/23" />
              </FormGroup>
              <FormGroup>
                <Label for="notes">Notes</Label>
                <Input type="text" name="notes" id="notes" placeholder="Additional details" />
              </FormGroup>
              <Button className={styles.remove}>Submit order</Button>
            </Form>
          </div>
          <div className={styles.contentRigth}>
            {cartProducts.map((product) => (
              <div key={product._id} className={styles.product}>
                <img src={product.img} alt={product.title} />
                <p className={styles.title}>{product.title}</p>
                <span className={styles.price}>{product.price}$</span>
                <div className={styles.amount}>
                  <Label for="amount">Amount:</Label>
                  <input type='number' min='1' step='1' id="amount" />
                </div>
                <Button variant="primary" className={styles.removeButton}>Remove</Button>
              </div>
            ))
            }
          </div>
        </div> :
        <div>
          <p className={styles.empty}>Your cart is empty!</p>
          <Button as={Link} variant="primary" to="/" className={styles.backButton}>Back home</Button>
        </div>
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
