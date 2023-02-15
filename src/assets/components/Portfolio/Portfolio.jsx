import React from 'react';
import CardPrimary from '../CardPrimary/CardPrimary';
import { Link } from 'react-router-dom';

import styles from './Portfolio.module.css';


function Portfolio({link}) {
  return (
    <div className={`${styles.containerPortfolio}`}>
        <div className={`${styles.portfolio} flex    container`}>
            <h3 className={`${styles.title} text-center text-uppercase`}>Portafolio</h3>
            <CardPrimary title='Stania Clothing' />
            <CardPrimary />
            <CardPrimary />
            <button type="button" className={`btn btn-dark`}><Link to={link} className={`${styles.btn}`}>Ver Mas</Link></button>
        </div>
    </div>
  )
}

export default Portfolio