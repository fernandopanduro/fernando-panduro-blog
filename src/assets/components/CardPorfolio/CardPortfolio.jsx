import React from 'react';

import styles from './CardPortfolio.module.css';
import { Bar } from '../Bar/Bar';

function CardPortfolio({imgAvif, imgJpg, imgWebp, title, link, type}) {
  return (
    <div className={`${styles.cardPortfolio}`}>
        <a href={link} title={title} target="_blank" rel="noopener noreferrer">
            <picture>
                <source srcSet={imgAvif} type='image/avif'/>
                <source srcSet={imgWebp} type='image/webp'/>
                <img className={`${styles.img}`} loading='lazy' width='200' height='300' src={imgJpg} alt={title} />
            </picture>
            <h3 className={styles.title}>{title}</h3>
            <p className='text-secondary'>{type}</p>
            <Bar />
        </a>
    </div>
  )
}

export default CardPortfolio