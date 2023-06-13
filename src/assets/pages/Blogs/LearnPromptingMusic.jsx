import React from 'react'
import styles from './Blogs.module.css';
import { Helmet } from 'react-helmet';
import { Bar } from '../../components/Bar/Bar';

import imgJpg from '../../pictures/img/edition-music.jpg';
import imgWebp from '../../pictures/img/edition-music.webp';
import imgAvif from '../../pictures/img/edition-music.avif'; 

import imgJpg2 from '../../pictures/img/singer.jpg';
import imgWebp2 from '../../pictures/img/singer.webp';
import imgAvif2 from '../../pictures/img/singer.avif'; 

import imgJpg3 from '../../pictures/img/edition-music2.jpg';
import imgWebp3 from '../../pictures/img/edition-music2.webp';
import imgAvif3 from '../../pictures/img/edition-music2.avif'; 

import imgJpg4 from '../../pictures/img/listenig-music.jpg';
import imgWebp4 from '../../pictures/img/listenig-music.webp';
import imgAvif4 from '../../pictures/img/listenig-music.avif'; 
import Share from '../../components/Share/Share';

export default function LearnPromptingMusic() {
  window.scrollTo(0,0)
  return (
    <div className={`${styles.containerBlogs} flex container`}>
        <Helmet>
            <title>🎶 El caos de los modelos de generación de música 🎹 | Fernado Panduro</title>
            <meta name="description" content='Los modelos de generación de música 🎶 son la nueva moda en la industria musical 🎵. Pronto, los músicos serán reemplazados por robots 🤖 con mucho más talento que ellos. ¡Adiós, talento humano! 👋 ¡Hola, robótica musical! 🎹' />    
        </Helmet>
        <div className={`${styles.blogs} flex`}>
            <h2 className='text-center'>🎶 El caos de los modelos de generación de música 🎹</h2>
            <Share />
            <Bar />

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif} type='image/avif'/>
              <source srcSet={imgWebp} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg} alt='' />
            </picture>

            <p>Los modelos de generación de música son la nueva moda en la industria musical 🎵. Pronto, los músicos serán reemplazados por robots con mucho más talento que ellos. ¡Adiós, talento humano! 👋 ¡Hola, robótica musical! 🎹</p>

            <p>La música es un arte que ha cautivado a la humanidad desde tiempos inmemoriales 🌅. Desde los sonidos de la naturaleza 🌳 hasta las complejas sinfonías de Bach 🎻, la música ha evolucionado y se ha adaptado a lo largo de los años 🕰️. Sin embargo, con el advenimiento de los modelos de generación de música, parece que los humanos estamos a punto de perder nuestro monopolio sobre este arte 🎭.</p>
            
            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif2} type='image/avif'/>
              <source srcSet={imgWebp2} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg2} alt='' />
            </picture>
            
            <p>Estos modelos son capaces de crear todo tipo de música, desde progresiones de acordes 🎼 hasta canciones completas. Incluso pueden imitar a artistas específicos 🎤, por lo que pronto podríamos tener nuevas canciones de nuestros músicos favoritos 🎸, aunque hay que tener en cuenta que, en realidad, habrán sido creadas por una computadora.</p>

            <p>Pero, no todo es fácil con estos modelos de generación de música 🎵. En comparación con los modelos de generación de texto 📝 o imágenes 📷, la música es difícil de "promptear", lo que significa que no se puede controlar completamente la música que se genera a través de los prompts. Es como tratar de enseñarle a un robot cómo bailar salsa 💃, puede que lo intente, pero nunca será tan bueno como un verdadero bailarín de salsa 🕺.</p>

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif3} type='image/avif'/>
              <source srcSet={imgWebp3} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg3} alt='' />
            </picture>

            <p>Existen algunos modelos que intentan superar esta limitación 🤔, como Riffusion1, que se puede controlar con prompts para generar estilos de instrumentos 🎸, pero solo tiene un número limitado de beats disponibles ⏰. O Mubert 🎧, que interpreta los prompts a través del análisis de sentimientos para vincular los estilos musicales apropiados al prompt, pero no se puede controlar en detalle los parámetros musicales a través de los prompts. Además, no está claro cuánta de la generación es hecha por IA y cuánto por un ingeniero humano.</p>

            <p>Algunos intentos de usar GPT-3 para generar música también están en marcha 🎶, pero por ahora, solo se limitan a instrumentos individuales. Esto significa que, por ejemplo, puede escribir notas para una canción folclórica que solo use A, B, C#, F# y G para un solo instrumento, pero no para una orquesta completa 🎼. Es como pedirle a una orquesta que toque "Despacito" solo con un violín 🎻.</p>

            <p>Otros enfoques incluyen una cadena de modelos que convierte cualquier imagen en un sonido que lo representa y la generación de código de prompts para bibliotecas de Python 🐍 que crean sonido con ChatGPT 🔊. ¡Es como convertir una pintura de Van Gogh 🎨 en una canción de rock 🤘!</p>

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif4} type='image/avif'/>
              <source srcSet={imgWebp4} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg4} alt='' />
            </picture>

            <p>Pero, no se preocupen, músicos humanos, todavía hay esperanza 🙌. La generación de música aún no está bien desarrollada y hay mucho trabajo por hacer antes de que las computadoras puedan superar a los verdaderos músicos humanos. Aunque, no se emocionen demasiado, ya hay modelos prometedores como MusicLM 🎹, pero todavía no están disponibles para el público 🤐. Quién sabe, tal vez en el futuro, seremos reemplazados por máquinas, pero por ahora, al menos podemos seguir tocando y disfrutando de la música hecha por humanos. ¡Larga vida al talento humano! 🎉</p>

        </div>
    </div>
  )
}
