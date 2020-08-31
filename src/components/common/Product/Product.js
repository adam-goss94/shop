import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';

const Component = ({id, title, price, img}) => (
  <div className={styles.root}>
    <Card key={id} className={`text-center ${styles.cards}`}>
      <Card.Img variant="top" src={img} alt={title} className={styles.image} />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Card.Subtitle className={styles.price}>{price}$</Card.Subtitle>
        <Button as={Link} to={`/product/${id}`} variant="primary" className={styles.priceButton}>
          Details
        </Button>
      </Card.Body>
    </Card>
  </div>
);

Component.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.string,
};

export {
  Component as Product,
  Component as ProductComponent,
};
