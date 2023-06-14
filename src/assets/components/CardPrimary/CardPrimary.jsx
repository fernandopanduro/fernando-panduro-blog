import React from 'react';

import styles  from './CardPrimary.module.css';
import { Bar } from '../Bar/Bar';
import { Fade } from 'react-reveal';
import { MdVerified } from 'react-icons/md'

import perfil from '../../pictures/img/perfil.jpeg';
import perfilAvif from '../../pictures/img/perfil.avif';
import perfilWebp from '../../pictures/img/perfil.webp';

function CardPrimary({posted, read, description, title, imgAvif, imgWebp, imgJpg}) {
  
  const newDescription = description.slice(0, 200)

  return (
    <div className={`${styles.cardPrimary} rounded`}>
      <Fade bottom>

        <div className={styles.imagen}>
          <picture className={`${styles.picture}`}>
            <source srcSet={imgAvif} type='image/avif'/>
            <source srcSet={imgWebp} type='image/webp'/>
            <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg} alt={title} />
          </picture>
        </div>

        <div className={styles.cardContent}>
          <div>
            <h4>{title}</h4>

            <div className={styles.descriptionContainer}>
              <div className={styles.gradient}></div>
              <p className={`text-secondary`}>{newDescription}. . .</p>
            </div>
            <p className={`text-secondary mb-3`}>Leer mas...</p>
          </div>


          <div>

            <div className={`${styles.details} flex`}>
              <picture>
                <source srcSet={perfilAvif} type='image/avif'/>
                <source srcSet={perfilWebp} type='image/webp'/>
                <img className={`${styles.imgProfile} rounded-4`} loading='lazy' width='200' height='300' src={perfil} alt='Foto de Perfil de Fernando' />
              </picture>

              <div className={`${styles.detailsDescription} flex`}>
                <span className='text-uppercase'>Fernando Panduro <MdVerified color='#499be2' /></span>
                <span className={`text-uppercase text-secondary`}>{posted} - {read}</span>
              </div>
            </div>

            <Bar />
          </div>

        </div>
        
      </Fade>
    </div>
  )
}

export default CardPrimary