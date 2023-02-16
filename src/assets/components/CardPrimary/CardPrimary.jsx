import React from 'react';

import styles  from './CardPrimary.module.css';
import { Bar } from '../Bar/Bar';

import img from '../../pictures/img/img.jpg';

function CardPrimary({posted, read, description, title, imgAvif, imgWebp, imgJpg}) {
  return (
    <div className={`${styles.cardPrimary}`}>

      <picture>
        <source srcSet={imgAvif} type='image/avif'/>
        <source srcSet={imgWebp} type='image/webp'/>
        <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg} alt={title} />
      </picture>


      <h4>{title}</h4>

      <p className={`text-secondary`}>{description}</p>


      <div className={`${styles.details} flex`}>

        <picture>
          <source srcSet={img} type='image/avif'/>
          <source srcSet={img} type='image/webp'/>
          <img className={`${styles.imgProfile} rounded-4`} loading='lazy' width='200' height='300' src={img} alt='Foto de Perfil de Fernando' />
        </picture>

        <div className={`${styles.detailsDescription} flex`}>
          <span className='text-uppercase'>Fernando Panduro</span>
          <span className={`text-uppercase text-secondary`}>{posted} - {read}</span>
        </div>

      </div>

      <Bar />

    </div>
  )
}

export default CardPrimary