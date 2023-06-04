import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import CardPortfolio from '../CardPorfolio/CardPortfolio';

import styles from './Portfolio.module.css';

import mazyJpg  from '../../pictures/img/mazy.jpg';
import mazyAvif  from '../../pictures/img/mazy.avif';
import mazyWebp  from '../../pictures/img/mazy.webp';

import eorumJpg  from '../../pictures/img/eorum.jpg';
import eorumAvif  from '../../pictures/img/eorum.avif';
import eorumWebp  from '../../pictures/img/eorum.webp';

import vendettaJpg  from '../../pictures/img/Vendetta.jpg';
import vendettaAvif  from '../../pictures/img/Vendetta.avif';
import vendettaWebp  from '../../pictures/img/Vendetta.webp';


function Portfolio({link}) {
  return (
    <div className={`${styles.containerPortfolio} flex`}>
        <h3 className={`${styles.title} text-center text-uppercase`}>Portafolio</h3>
        <div className={`${styles.portfolio} container`}>

            <Fade bottom>
              <CardPortfolio technology='REACTJS - CSSModules - GIT' link='https://vendettamx.netlify.app/' title='Vendetta' type='Tienda de ropa para mujeres' imgJpg={vendettaJpg} imgWebp={vendettaWebp} imgAvif={vendettaAvif} />
              <CardPortfolio technology='REACTJS - TAILWIND - GIT ' link='https://eorum.netlify.app/' type='Ecommerce de ropa japonessa' title='Eorum' imgJpg={eorumJpg} imgWebp={eorumWebp} imgAvif={eorumAvif} />
              <CardPortfolio technology='REACTJS - CSSModules - GIT' link='https://mazy.netlify.app/' type='Web de vaporizador de comida' title='Mazy' imgJpg={mazyJpg} imgWebp={mazyWebp} imgAvif={mazyAvif} />
            </Fade>

        </div>
        <button type="button" className={`btn btn-dark`}><Link to={link} className={`${styles.btn}`}>Ver Mas</Link></button>
    </div>
  )
}

export default Portfolio