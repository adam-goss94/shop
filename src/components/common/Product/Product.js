import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';

const Component = ({id, title, category, description, price, image}) => (
  <div className={styles.root}>
    <Card key={id} className={styles.cards} as={Link} to={`/product/${id}`}>
      <Card.Img variant="top" src={image} alt={title} className={styles.image} />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Card.Subtitle className={styles.price}>{price}$</Card.Subtitle>
        <Button variant="primary" className={styles.priceButton}>
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
  description: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
};

export {
  Component as Product,
  Component as ProductComponent,
};
