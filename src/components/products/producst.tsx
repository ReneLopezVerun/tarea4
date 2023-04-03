import React from 'react';
import styles from './products.module.css';

interface ProductProps {
  imageSrc: string;
  title: string;
  description: string;
  price: number;
  imageshop:string;
}

const Product: React.FC<ProductProps> = ({
  imageSrc,
  title,
  description,
  price,
  imageshop
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageSrc} alt={title} />
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
      <img className={styles.image2} src={imageshop} alt={description} />
    </div>
  );
};

export default Product;
