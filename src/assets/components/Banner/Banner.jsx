import React from 'react';

import styles from './Banner.module.css';

function Banner() {
  return (
    <div className={styles.bannerContainer}>
        <div className={`${styles.banner} flex container`}>
            <h2 className={`${styles.title} text-secondary-emphasis`}>Fernando Panduro</h2>
            <h3 className={`${styles.subtitle}`}>Ingeniero de software, creador de contenido, escritor ocasional</h3>
        </div>
    </div>
  )
}

export default Banner