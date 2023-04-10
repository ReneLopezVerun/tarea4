import React from 'react';
import styles from './products.module.css';
import { ProductProps } from '@/interfaces/productos'


const Product: React.FC<ProductProps> = ({
  imageSrc,
  title,
  price,
  imageshop
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageSrc} alt={title} />
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
      <img className={styles.image2} src={imageshop} />
    </div>
  );
};

export default Product;
