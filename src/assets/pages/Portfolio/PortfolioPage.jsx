import React from 'react';  

import styles from './PortfolioPage.module.css';
import CardPortfolio from '../../components/CardPorfolio/CardPortfolio';

// Images
import staniaJpg  from '../../pictures/img/Stania.jpg';
import staniaAvif  from '../../pictures/img/Stania.avif';
import staniaWebp  from '../../pictures/img/Stania.webp';

import venblogJpg  from '../../pictures/img/venblog.jpg';
import venblogAvif  from '../../pictures/img/venblog.avif';
import venblogWebp  from '../../pictures/img/venblog.webp';

import vendettaJpg  from '../../pictures/img/Vendetta.jpg';
import vendettaAvif  from '../../pictures/img/Vendetta.avif';
import vendettaWebp  from '../../pictures/img/Vendetta.webp';

import llanteraJpg  from '../../pictures/img/llantera.jpg';
import llanteraAvif  from '../../pictures/img/llantera.avif';
import llanteraWebp  from '../../pictures/img/llantera.webp';

import eorumJpg  from '../../pictures/img/eorum.jpg';
import eorumAvif  from '../../pictures/img/eorum.avif';
import eorumWebp  from '../../pictures/img/eorum.webp';

import calculadoraJpg  from '../../pictures/img/calculadora.jpg';
import calculadoraAvif  from '../../pictures/img/calculadora.avif';
import calculadoraWebp  from '../../pictures/img/calculadora.webp';

import starlinkJpg  from '../../pictures/img/starlink.jpg';
import starlinkAvif  from '../../pictures/img/starlink.avif';
import starlinkWebp  from '../../pictures/img/starlink.webp';

import bateriaJpg  from '../../pictures/img/bateria.jpg';
import bateriaAvif  from '../../pictures/img/bateria.avif';
import bateriaWebp  from '../../pictures/img/bateria.webp';

import energyJpg  from '../../pictures/img/energy.jpg';
import energyAvif  from '../../pictures/img/energy.avif';
import energyWebp  from '../../pictures/img/energy.webp';

import { Helmet } from 'react-helmet';



function PortfolioPage() {
  return (
    <div className={`${styles.containerPortfolioPage}`}>
      <Helmet>    
        <title>Portafolio | Fernando Panduro</title>
        <meta name='description' content='Portafolio' />
      </Helmet>
      <h2 className={`${styles.title}`}>Portafolio</h2>
      <div className={`${styles.portfolioPage} container`}>
          <CardPortfolio technology='REACTJS - CSSModules - GIT' link='https://vendettamx.netlify.app/' type='Tienda de ropa para mujeres' title='Vendetta' imgJpg={vendettaJpg} imgWebp={vendettaWebp} imgAvif={vendettaAvif} />
          <CardPortfolio technology='REACTJS - TAILWIND - GIT ' link='https://eorum.netlify.app/' type='Ecommerce de ropa japonessa' title='Eorum' imgJpg={eorumJpg} imgWebp={eorumWebp} imgAvif={eorumAvif} />
          <CardPortfolio technology='REACTJS - TAILWIND - CSSModules - GIT - GULP' link='https://stania.netlify.app/' type='Marca de ropa' title='Stania'  imgJpg={staniaJpg} imgWebp={staniaWebp} imgAvif={staniaAvif} />
          <CardPortfolio technology='REACTJS - CSSModules - GIT' link='https://llantera.netlify.app/' type='Tienda de llantas' title='Llantera Garcia' imgJpg={llanteraJpg} imgWebp={llanteraWebp} imgAvif={llanteraAvif} />
          <CardPortfolio technology='HTML - SCSS - JS - GIT - GULP' link='https://starlink-premium.netlify.app/' type='Satelites de Elon Musk' title='Starlink' imgJpg={starlinkJpg} imgWebp={starlinkWebp} imgAvif={starlinkAvif} />
          <CardPortfolio technology='HTML - SCSS - JS - PHP' link='https://vehblogs.netlify.app/' type='Blog informativo' title='VenBlog' imgJpg={venblogJpg} imgWebp={venblogWebp} imgAvif={venblogAvif} />
          <CardPortfolio technology='HTML - CSS - JS - GIT - GULP' link='https://energy-pro.netlify.app/' type='Landingpage de Paneles Solares' title='Energy' imgJpg={energyJpg} imgWebp={energyWebp} imgAvif={energyAvif} />
          <CardPortfolio technology='HTML - CSS -JS' link='https://batteryfernando.netlify.app/' type='Porcentaje de bateria' title='Bateria' imgJpg={bateriaJpg} imgWebp={bateriaWebp} imgAvif={bateriaAvif} />
          <CardPortfolio technology='HTML - CSS -JS' link='https://calculadora-glassmorphism.netlify.app/' type='Calculadora glassmorphism' title='Calculadora' imgJpg={calculadoraJpg} imgWebp={calculadoraWebp} imgAvif={calculadoraAvif} />
      </div>
    </div>
  )
}

export default PortfolioPage