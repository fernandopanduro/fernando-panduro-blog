import React from 'react'

import styles  from './CardsSection.module.css';
import CardPrimary from '../CardPrimary/CardPrimary';
import CardSecondary from '../CardSecondary/CardSecondary';


function CardsSection({title}) {
  return (
    <div className={`container`}>
      <h3>{title}</h3>
      <CardPrimary />
      <CardSecondary />
    </div>
  )
}

export default CardsSection