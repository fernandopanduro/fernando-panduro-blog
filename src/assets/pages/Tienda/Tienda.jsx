import React from 'react';
import { CardProduct } from '../../components/CardProduct/CardProduct';

import styles from './Tienda.module.css';

export const Tienda = () => {
  return (
    <div className={`${styles.containerTienda} flex`}>
        <div className={`${styles.tienda} container`}>
            <h2 className='text-center'>Productos</h2>
            <div className={styles.cardsProducts}>
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </div>
        </div>
    </div>
  )
}