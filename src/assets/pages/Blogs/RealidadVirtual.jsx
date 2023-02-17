import React from 'react';
import { Bar } from '../../components/Bar/Bar';

import styles from './Blogs.module.css';

import imgJpg1 from '../../pictures/img/realidad-virtual-1.jpg';
import imgAvif1 from '../../pictures/img/realidad-virtual-1.avif';
import imgWebp1 from '../../pictures/img/realidad-virtual-1.webp';

import imgJpg2 from '../../pictures/img/realidad-virtual-2.jpg';
import imgAvif2 from '../../pictures/img/realidad-virtual-2.avif';
import imgWebp2 from '../../pictures/img/realidad-virtual-2.webp';

import imgJpg3 from '../../pictures/img/realidad-virtual-3.jpg';
import imgAvif3 from '../../pictures/img/realidad-virtual-3.avif';
import imgWebp3 from '../../pictures/img/realidad-virtual-3.webp';

import imgJpg4 from '../../pictures/img/realidad-virtual-4.jpg';
import imgAvif4 from '../../pictures/img/realidad-virtual-4.avif';
import imgWebp4 from '../../pictures/img/realidad-virtual-4.webp';

function RealidadVirtual() {
  return (
    <div className={`${styles.containerBlogs} flex container`}>
      <div className={`${styles.blogs} flex`}>
          <h2 className='text-center'>La Realidad Virtual y Aumentada: El Futuro de la Entretención y la Tecnología</h2>
          <Bar />

          <picture className={`${styles.picture}`}>
            <source srcSet={imgAvif1} type='image/avif'/>
            <source srcSet={imgWebp1} type='image/webp'/>
            <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg1} alt='Realidad Virtual' />
          </picture>

          <p>La tecnología de realidad virtual (VR) y realidad aumentada (AR) está transformando la forma en que nos entretenemos y experimentamos el mundo que nos rodea. Desde videojuegos hasta la formación, estas tecnologías están ofreciendo experiencias únicas e inmersivas que no se pueden encontrar en ningún otro lugar.</p>

          <picture className={`${styles.picture}`}>
            <source srcSet={imgAvif2} type='image/avif'/>
            <source srcSet={imgWebp2} type='image/webp'/>
            <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg2} alt='Realidad Virtual' />
          </picture>

          <p>La realidad virtual es una tecnología en la que se crea un ambiente artificial y se utiliza un dispositivo para sumergir al usuario en ese ambiente. Con la VR, los usuarios pueden interactuar con el entorno de manera natural, utilizando controladores de movimiento y otros dispositivos para navegar y experimentar.</p>     
          <p>Por otro lado, la realidad aumentada es una tecnología que combina el mundo real con elementos digitales para crear una experiencia enriquecedora. Con la AR, los usuarios pueden ver objetos digitales superpuestos en el mundo real, lo que les permite interactuar con ellos de manera más natural.</p>    
          <p>Estas tecnologías están teniendo un impacto significativo en el sector del entretenimiento. Los videojuegos de VR están ofreciendo experiencias únicas e inmersivas que nunca antes se han visto, y la AR está transformando la forma en que los usuarios interactúan con los juegos y las aplicaciones.</p>

          <picture className={`${styles.picture}`}>
            <source srcSet={imgAvif3} type='image/avif'/>
            <source srcSet={imgWebp3} type='image/webp'/>
            <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg3} alt='Realidad Virtual' />
          </picture>

          <p>Además de los videojuegos, la VR y la AR también están teniendo un impacto significativo en la formación. Por ejemplo, la VR se está utilizando para crear simulaciones realistas que permiten a los estudiantes aprender de manera más efectiva. Y la AR está permitiendo a los profesores y los estudiantes interactuar con materiales educativos de manera más dinámica y enriquecedora.</p>

          <picture className={`${styles.picture}`}>
            <source srcSet={imgAvif4} type='image/avif'/>
            <source srcSet={imgWebp4} type='image/webp'/>
            <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg4} alt='Realidad Virtual' />
          </picture>

          <p>En conclusión, la realidad virtual y aumentada son tecnologías con un gran potencial y están teniendo un impacto significativo en la forma en que nos entretenemos y experimentamos el mundo que nos rodea. A medida que estas tecnologías continúen evolucionando, es probable que veamos aún más aplicaciones innovadoras y sorprendentes en el futuro cercano.</p>
      </div>
    </div>
  )
}

export default RealidadVirtual