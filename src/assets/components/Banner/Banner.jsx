import React from 'react';

import styles from './Banner.module.css';
import { Fade } from 'react-reveal';

function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <Fade bottom>
        <div className={`${styles.banner} flex container animate__fadeInUp`}>
            <h2 className={`${styles.title} text-secondary-emphasis`}>Fernando Panduro</h2>
            <h3 className={`${styles.subtitle}`}>Ingeniero de software, escritor, creador de contenido ocasional</h3>
        </div>
      </Fade>
    </div>
  )
}

export default Banner