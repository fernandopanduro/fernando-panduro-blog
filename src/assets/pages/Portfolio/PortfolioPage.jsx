import React from 'react';  

import styles from './PortfolioPage.module.css';
import CardPortfolio from '../../components/CardPorfolio/CardPortfolio';

// Images

import kiaJpg  from '../../pictures/img/kia.jpg';
import kiaAvif  from '../../pictures/img/kia.avif';
import kiaWebp  from '../../pictures/img/kia.webp';

import mgJpg  from '../../pictures/img/mg.png';
import mgAvif  from '../../pictures/img/mg.avif';
import mgWebp  from '../../pictures/img/mg.webp';

import mazyJpg  from '../../pictures/img/mazy.jpg';
import mazyAvif  from '../../pictures/img/mazy.avif';
import mazyWebp  from '../../pictures/img/mazy.webp';

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

import starlinkJpg  from '../../pictures/img/starlink.jpg';
import starlinkAvif  from '../../pictures/img/starlink.avif';
import starlinkWebp  from '../../pictures/img/starlink.webp';

import energyJpg  from '../../pictures/img/energy.jpg';
import energyAvif  from '../../pictures/img/energy.avif';
import energyWebp  from '../../pictures/img/energy.webp';

import { Helmet } from 'react-helmet';



function PortfolioPage() {

  window.scrollTo(0,0)

  return (
    <div className={`${styles.containerPortfolioPage}`}>
      <Helmet>    
        <title>Portafolio | Fernando Panduro</title>
        <meta name='description' content='Portafolio' />
      </Helmet>
      <h2 className={`${styles.title}`}>Portafolio</h2>
      <div className={`${styles.portfolioPage} container`}>
          <CardPortfolio technology='REACTJS CSSModules GIT' link='https://www.mgmotor.com.mx/' type='Compañia de automoviles' title='Mg Motor' imgJpg={mgJpg} imgWebp={mgWebp} imgAvif={mgAvif} />
          <CardPortfolio technology='REACTJS CSSModules GIT' link='https://www.apartatukia.com/' type='Fabricante de vehículos' title='Kia México' imgJpg={kiaJpg} imgWebp={kiaWebp} imgAvif={kiaAvif} />
          <CardPortfolio technology='REACTJS CSSModules GIT' link='https://vendettamx.netlify.app/' type='Tienda de ropa para mujeres' title='Vendetta' imgJpg={vendettaJpg} imgWebp={vendettaWebp} imgAvif={vendettaAvif} />
          <CardPortfolio technology='REACTJS TAILWIND GIT' link='https://eorum.netlify.app/' type='Ecommerce de ropa japonessa' title='Eorum' imgJpg={eorumJpg} imgWebp={eorumWebp} imgAvif={eorumAvif} />
          <CardPortfolio technology='REACTJS CSSModules GIT' link='https://mazy.netlify.app/' type='Web de vaporizador de comida' title='Mazy' imgJpg={mazyJpg} imgWebp={mazyWebp} imgAvif={mazyAvif} />
          <CardPortfolio technology='REACTJS TAILWIND CSSModules GIT GULP' link='https://stania.netlify.app/' type='Marca de ropa' title='Stania'  imgJpg={staniaJpg} imgWebp={staniaWebp} imgAvif={staniaAvif} />
          <CardPortfolio technology='REACTJS CSSModules GIT' link='https://llantera.netlify.app/' type='Tienda de llantas' title='Llantera Garcia' imgJpg={llanteraJpg} imgWebp={llanteraWebp} imgAvif={llanteraAvif} />
          <CardPortfolio technology='HTML SCSS JS GIT GULP' link='https://starlink-premium.netlify.app/' type='Satelites de Elon Musk' title='Starlink' imgJpg={starlinkJpg} imgWebp={starlinkWebp} imgAvif={starlinkAvif} />
          <CardPortfolio technology='HTML SCSS JS PHP' link='https://vehblogs.netlify.app/' type='Blog informativo' title='VenBlog' imgJpg={venblogJpg} imgWebp={venblogWebp} imgAvif={venblogAvif} />
          <CardPortfolio technology='HTML CSS JS GIT GULP' link='https://energy-pro.netlify.app/' type='Landingpage de Paneles Solares' title='Energy' imgJpg={energyJpg} imgWebp={energyWebp} imgAvif={energyAvif} />
      </div>
    </div>
  )
}

export default PortfolioPage