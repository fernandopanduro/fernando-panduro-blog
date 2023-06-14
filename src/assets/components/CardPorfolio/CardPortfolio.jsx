import React from 'react';

import styles from './CardPortfolio.module.css';
import { Bar } from '../Bar/Bar';

function CardPortfolio({imgAvif, imgJpg, imgWebp, title, link, type, technology}) {
  const technologys = technology.split(' ');
  return (
    <div className={`${styles.cardPortfolio} rounded`}>
        <a href={link} title={title} target="_blank" rel="noopener noreferrer">
            <picture className={styles.picture}>
                <source srcSet={imgAvif} type='image/avif'/>
                <source srcSet={imgWebp} type='image/webp'/>
                <img className={`rounded ${styles.img}`} loading='lazy' width='200' height='300' src={imgJpg} alt={title} />
            </picture>
            <div className={`${styles.contenido} rounded`}>
              <h3 className={styles.title}>{title}</h3>
              <p className='text-secondary'>{type}</p>
              <span className={styles.technologys}>
                {technologys.map((element, index) => <span key={index} className={styles.technology}>{element}</span>)}
              </span>
              <Bar />
            </div>
        </a>
    </div>
  )
}

export default CardPortfolio