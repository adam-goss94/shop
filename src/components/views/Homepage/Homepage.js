import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = () => (
  <div className={styles.root}>
    <h2>Welcome in our shop!</h2>
    <div className={styles.content}>
      <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur lorem eget sem vulputate consectetur. Aliquam laoreet et massa sit amet mattis. Ut ullamcorper ultricies leo non auctor. Donec facilisis mi posuere, hendrerit est vitae, porttitor nisl. Pellentesque id dolor lacus. Quisque urna elit, pharetra ut viverra non, hendrerit quis dui. Mauris venenatis vestibulum dolor eget vulputate. Sed in mi eget metus consequat suscipit. Maecenas scelerisque mauris at leo bibendum consequat. Nunc ornare ullamcorper porttitor. Praesent mauris elit, fermentum hendrerit massa ut, fermentum consectetur purus. Maecenas ornare diam ut enim luctus dictum. Proin nec dignissim ligula. Ut dictum porttitor mi in elementum.
      </div>
      <div className={styles.links}>
        <div className={styles.links_Left}>
          <Button as={Link} to="/tshirts">T-shirts</Button>
        </div>
        <div className={styles.links_Right}>
          <Button as={Link} to="/hoodies">Hoodies</Button>
        </div>
      </div>
      <div>Vestibulum at ultrices leo. Sed sollicitudin justo non enim ultrices tincidunt. Quisque feugiat felis eget tellus tempor dictum. Suspendisse maximus scelerisque eros, ut porttitor velit iaculis ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eget velit lobortis, mollis turpis eget, vulputate justo. Nunc sed facilisis turpis. Etiam nibh ex, suscipit nec lobortis eget, lobortis id nulla. Suspendisse eget libero sed massa volutpat commodo sed et nulla. Donec nisl nisl, pharetra sed nibh vel, eleifend dapibus augue. Morbi at egestas risus. Aenean volutpat neque eu libero tempus mollis.</div>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
