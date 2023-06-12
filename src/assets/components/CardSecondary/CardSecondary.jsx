import React from 'react'

import styles  from './CardSecondary.module.css';

import img from '../../pictures/img/img.jpg';
import { Fade } from 'react-reveal';


function CardSecondary({title, posted, read, imgJpg = img, imgAvif, imgWebp}) {
  return (
    <div className={`${styles.cardSecondary} flex rounded`}>
      <Fade bottom>
        <picture className={`${styles.picture}`}>
          <source srcSet={imgAvif} type='image/avif'/>
          <source srcSet={imgWebp} type='image/webp'/>
          <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg} alt={title} />
        </picture>

        <div className={`${styles.details} flex`}>
          <h4 className={`${styles.title} text-uppercase`}>{title}</h4>
          <span className={`${styles.subtitle} text-uppercase text-secondary`}>{posted} - {read}</span>
        </div>
      </Fade>

    </div>
  )
}

export default CardSecondary