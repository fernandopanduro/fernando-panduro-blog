import React from 'react';

import styles  from './CardPrimary.module.css';
import { Bar } from '../Bar/Bar';

import img from '../../pictures/img/img.jpg';

function CardPrimary({posted, read, description, title}) {
  return (
    <div className={`${styles.cardPrimary}`}>
      

      <picture>
        <img className={`${styles.img} rounded-1`} src={img} alt="img" />
      </picture>


      <h4>{title}</h4>

      <p className={`text-secondary`}>{description}</p>


      <div className={`${styles.details} flex`}>

        <picture>
          <img className={`${styles.imgProfile} rounded-4`} src={img} alt="Foto de Perfil de Fernando" />
        </picture>

        <div className={`${styles.detailsDescription} flex`}>
          <span className='text-uppercase'>Fernando Panduro</span>
          <span className={`text-uppercase text-secondary`}>{posted} - {read} Lectura</span>
        </div>

      </div>

      <Bar />

    </div>
  )
}

export default CardPrimary