import React from 'react'

import styles  from './CardsSection.module.css';
import CardPrimary from '../CardPrimary/CardPrimary';
import CardSecondary from '../CardSecondary/CardSecondary';
import { Bar } from '../Bar/Bar';
import { Link } from 'react-router-dom';


function CardsSection({title, link}) {
  return (
    <div className={`${styles.cardsSection} flex container`}>
      <h3 className={`${styles.title} text-uppercase`}>{title}</h3>
      <CardPrimary />
      <CardSecondary />
      <CardSecondary />
      <CardSecondary />
      <CardSecondary />
      <CardSecondary />
      <button type="button" className={`btn btn-dark `}><Link to={link} className={`${styles.btn}`}>Ver Mas</Link></button>
    </div>
  )
}

export default CardsSection