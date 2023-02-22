import React from 'react'
import { Link } from 'react-router-dom';

import img from '../../pictures/img/img.jpg';
import styles from './CardProduct.module.css';

export const CardProduct = () => {
  return (
    <Link to='/product/:id'>
      <div className={styles.cardProduct}>

          <div className={`${styles.containerImg}`}>
              <picture className={`${styles.picture}`}>
                  <source srcSet={img} type='image/avif'/>
                  <source srcSet={img} type='image/webp'/>
                  <img className={`${styles.img}`} loading='lazy' width='200' height='300' src={img} alt='Imgs' />
              </picture>
          </div>

          <div className={`${styles.details}`}>
              <h3 className={`${styles.title}`}>CardProduct</h3>
              <span className={`${styles.price}`}>$ Price</span>
          </div>

      </div>
    </Link>
  )
}
