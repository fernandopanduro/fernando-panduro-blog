import React from 'react';
import { Link } from 'react-router-dom';
import CardPortfolio from '../CardPorfolio/CardPortfolio';

import styles from './Portfolio.module.css';

import staniaJpg  from '../../pictures/img/Stania.jpg';
import staniaAvif  from '../../pictures/img/Stania.avif';
import staniaWebp  from '../../pictures/img/Stania.webp';

import venblogJpg  from '../../pictures/img/venblog.jpg';
import venblogAvif  from '../../pictures/img/venblog.avif';
import venblogWebp  from '../../pictures/img/venblog.webp';

import vendettaJpg  from '../../pictures/img/Vendetta.jpg';
import vendettaAvif  from '../../pictures/img/Vendetta.avif';
import vendettaWebp  from '../../pictures/img/Vendetta.webp';


function Portfolio({link}) {
  return (
    <div className={`${styles.containerPortfolio}`}>
        <div className={`${styles.portfolio} flex container`}>
            <h3 className={`${styles.title} text-center text-uppercase`}>Portafolio</h3>

            <CardPortfolio link='https://vendettamx.netlify.app/' title='Vendetta' imgJpg={vendettaJpg} imgWebp={vendettaWebp} imgAvif={vendettaAvif} />
            <CardPortfolio link='https://vehblogs.netlify.app/' title='VenBlog' imgJpg={venblogJpg} imgWebp={venblogWebp} imgAvif={venblogAvif} />
            <CardPortfolio link='https://stania.netlify.app/' title='Stania' imgJpg={staniaJpg} imgWebp={staniaWebp} imgAvif={staniaAvif} />

            <button type="button" className={`btn btn-dark`}><Link to={link} className={`${styles.btn}`}>Ver Mas</Link></button>
        </div>
    </div>
  )
}

export default Portfolio