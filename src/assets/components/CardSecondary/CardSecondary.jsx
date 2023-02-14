import React from 'react'

import styles  from './CardSecondary.module.css';

import img from '../../pictures/img/img.jpg';


function CardSecondary({title, posted, read}) {
  return (
    <div className={`${styles.cardSecondary} flex`}>
      <picture className={`${styles.picture}`}>
        <img className={`${styles.img} rounded-1`} src={img} alt="" />
      </picture>
      <div className={`${styles.details} flex`}>
        <h5 className={`${styles.title} text-uppercase`}>{title}</h5>
        <span className={`${styles.subtitle} text-uppercase text-secondary`}>{posted} - {read} Lectura</span>
      </div>
    </div>
  )
}

export default CardSecondary