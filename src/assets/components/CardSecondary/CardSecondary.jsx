import React from 'react'

import styles  from './CardSecondary.module.css';

import img from '../../pictures/img/img.jpg';


function CardSecondary() {
  return (
    <div className={`${styles.cardSecondary} flex`}>
      <picture className={`${styles.picture}`}>
        <img className={`${styles.img} rounded-1`} src={img} alt="" />
      </picture>
      <div className={`${styles.details} flex`}>
        <h5 className={`${styles.title} text-uppercase`}>Cambia tus herramientas</h5>
        <span className={`${styles.subtitle} text-uppercase text-secondary`}>6 AGO. 2022 - 4 min Lectura</span>
      </div>
    </div>
  )
}

export default CardSecondary