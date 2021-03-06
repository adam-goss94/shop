import React from 'react';
import { Products } from '../../features/Products/Products';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Hoodies.module.scss';

const Component = () => (
  <div className={styles.root}>
    <h2>Hoodies</h2>
    <Products category='Hoodie' />
  </div>
);

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Hoodies,
  // Container as Hoodies,
  Component as HoodiesComponent,
};
