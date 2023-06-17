import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import CardPortfolio from '../CardPorfolio/CardPortfolio';

import styles from './Portfolio.module.css';

import mgJpg  from '../../pictures/img/mg.png';
import mgAvif  from '../../pictures/img/mg.avif';
import mgWebp  from '../../pictures/img/mg.webp';

import eorumJpg  from '../../pictures/img/eorum.jpg';
import eorumAvif  from '../../pictures/img/eorum.avif';
import eorumWebp  from '../../pictures/img/eorum.webp';

import kiaJpg  from '../../pictures/img/kia.jpg';
import kiaAvif  from '../../pictures/img/kia.avif';
import kiaWebp  from '../../pictures/img/kia.webp';

import mazyJpg  from '../../pictures/img/mazy.jpg';
import mazyAvif  from '../../pictures/img/mazy.avif';
import mazyWebp  from '../../pictures/img/mazy.webp';


function Portfolio({link}) {
  return (
    <div className={`${styles.containerPortfolio} flex`}>
        <h3 className={`${styles.title} text-center text-uppercase`}>Portafolio</h3>
        <div className={`${styles.portfolio} container`}>

            <Fade bottom>
              <CardPortfolio technology='HTML CSS JS Bootstrap JQuery Git' link='https://www.mgmotor.com.mx/' type='Compañia de automoviles' title='Mg Motor' imgJpg={mgJpg} imgWebp={mgWebp} imgAvif={mgAvif} />
              <CardPortfolio technology='REACTJS TAILWIND GIT' link='https://eorum.netlify.app/' type='Ecommerce de ropa japonessa' title='Eorum' imgJpg={eorumJpg} imgWebp={eorumWebp} imgAvif={eorumAvif} />
              <CardPortfolio technology='REACTJS CSSModules GIT' link='https://mazy.netlify.app/' type='Web de vaporizador de comida' title='Mazy' imgJpg={mazyJpg} imgWebp={mazyWebp} imgAvif={mazyAvif} />
              {/* <CardPortfolio technology='REACTJS CSSModules GIT' link='https://www.apartatukia.com/' type='Fabricante de vehículos' title='Kia México' imgJpg={kiaJpg} imgWebp={kiaWebp} imgAvif={kiaAvif} /> */}
            </Fade>

        </div>
        <button type="button" className={`btn btn-dark`}><Link to={link} className={`${styles.btn}`}>Ver Mas</Link></button>
    </div>
  )
}

export default Portfolio