import React from 'react'

import styles from './Blogs.module.css';
import { Bar } from '../../components/Bar/Bar';

import imgJpg from '../../pictures/img/felicidad1.jpg';
import imgAvif from '../../pictures/img/felicidad1.avif';
import imgWebp from '../../pictures/img/felicidad1.webp';

import imgJpg2 from '../../pictures/img/felicidad2.jpg';
import imgAvif2 from '../../pictures/img/felicidad2.avif';
import imgWebp2 from '../../pictures/img/felicidad2.webp';

import imgJpg3 from '../../pictures/img/felicidad3.jpg';
import imgAvif3 from '../../pictures/img/felicidad3.avif';
import imgWebp3 from '../../pictures/img/felicidad3.webp';

import imgJpg4 from '../../pictures/img/felicidad4.jpg';
import imgAvif4 from '../../pictures/img/felicidad4.avif';
import imgWebp4 from '../../pictures/img/felicidad4.webp';

import imgJpg5 from '../../pictures/img/ejercicio1.jpg';
import imgAvif5 from '../../pictures/img/ejercicio1.avif';
import imgWebp5 from '../../pictures/img/ejercicio1.webp';
import { Helmet } from 'react-helmet';

function ComoSerFeliz() {
  window.scrollTo(0,0)
  return (
    <div className={`${styles.containerBlogs} flex container`}>
      <Helmet>
        <title>El secreto de la felicidad | Fernando Panduro</title>
        <meta name='description' content='Nunca busques la felicidad, ya que es una ilusion que se asoma a la lejania, pero en cambio el dolor y el sufrimiento son reales e inmediatos. Como dijo Aristoteles (Ética a Nicómaco); "No aspires al placer sino a la ausencia del  dolor"' />
      </Helmet>
      <div className={`${styles.blogs} flex`}>
          <h2 className='text-center'>El secreto de la felicidad</h2>
          <Bar />

          <picture className={`${styles.picture}`}>
            <source srcSet={imgAvif} type='image/avif'/>
            <source srcSet={imgWebp} type='image/webp'/>
            <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg} alt='Felicidad' />
          </picture>

          <p>Nunca busques la felicidad, ya que es una ilusion que se asoma a la lejania, pero en cambio el dolor y el sufrimiento son reales e inmediatos. Como dijo Aristoteles (Ética a Nicómaco); "No aspires al placer sino a la ausencia del  dolor"</p>
          <p>La ley de Retrocesión establece que entre más persigues la felicidad más insatisfecho quedas.</p>

          <p>Existen 4 factores para ser feliz:</p>
          <ul>
            <li>- El temperamento feliz, que determina la capacidad del sufrimiento.</li>
            <li>- La salud del cuerpo.</li>
            <li>- La tranquilidad del espíritu.</li>
            <li>- Bienes externos.</li>
          </ul>

          <picture className={`${styles.picture}`}>
            <source srcSet={imgAvif2} type='image/avif'/>
            <source srcSet={imgWebp2} type='image/webp'/>
            <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg2} alt='Felicidad' />
          </picture>

          <p>La salud del cuerpo:</p>
          <p>Las personas saludables perciben mejor forma de experiencias positivas.</p>
          <p>Debido a los procesos quimicos que ocurren dentro de nuestro cuerpo, la felicidad esta relacionada directamente con la salud fisica de su cuerpo. Disfrutando  de buena salud, todas las experiencias son percibidas como satisfactorias.</p>
          <p>La alegria es una experiencia positiva, la alegria puede sustituir todos los bienes, pero ningun bien puede sustituye la felicidad. Percibir la alegria de mejor manera debemos de gozar de buena salud.</p>
          <p>Haz ejercicio fisico!</p>
          <p>Aunque puede ser que realizar ejercicio fisico experimentes dolor y sufrimiento, al finalizarlo encontraras satisfaccion y realizacion. Todo lo que vale en esta vida es ganado atraves de superar una experiencia negativa asociada.</p>

          <picture className={`${styles.picture}`}>
            <source srcSet={imgAvif5} type='image/avif'/>
            <source srcSet={imgWebp5} type='image/webp'/>
            <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg5} alt='Felicidad' />
          </picture>

          <p>La tranquilidad del espiritu:</p>
          <p>Tener tranquilidad en la mente, tienes que hablar poco con otros y mucho con nosotros mismos. Si confienzas tus secretos a alguna otra persona, en algun momento los confesara y ahora estara en boca de todos.</p>
          <p>Un hombre que se mantiene sereno ante todas las acciones de la vida, contempla todos los males como pequeñas partes dela vida.</p>
          <p>Una vez llegado el infortuniono se puede remediar. Evita pensar en que pudo hacerse de otra manera.</p>
          <p>Serenamos nuestra triste existencia especulando sobre las posibilidades y esperanzas, las cuales se tornaran decepcionantes si no se cumplen. Es mejor tomar todas  las malas posibilidades como objeto de nuestra especulacion, lo cual hara que tomemos precauciones para prevenirlas, lo cual daria sorpresas positivs si no se cumplen.</p>

          <picture className={`${styles.picture}`}>
            <source srcSet={imgAvif3} type='image/avif'/>
            <source srcSet={imgWebp3} type='image/webp'/>
            <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg3} alt='Felicidad' />
          </picture>

          <p>Los bienes externos:</p>
          <p>Relaciones entre pretenciones y posesiones.</p>
          <p>Los bienes que nunca has pensado en pretender, estás plenamente contento sin ellos. Otro que tienen 100 veces más que otro, se siente infeliz porque no puede acceder a un bien que pretende.</p>
          <p>Tenemos que vivir como podemos no como queremos.</p>
          <p>Evita a toda costa la envidia. "Nunca seras feliz si te atormenta que algun otro sea mas feliz que tú", "Cuando pienses en cuantos te adelantan, ten encuenta cuantos te siguen" frases del filosofo Séneca.</p>

          <picture className={`${styles.picture}`}>
            <source srcSet={imgAvif4} type='image/avif'/>
            <source srcSet={imgWebp4} type='image/webp'/>
            <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg4} alt='Felicidad' />
          </picture>

          <p>Se puede ser feliz, siento estoico o tambien maquiavélico, pero para este blog se restringieron estas posibilidades.</p>
          <p>Muchos de los argumentos planteados en este blog son de Schopenhauer de su libro Eudemonología o el Arte de ser feliz; Recuerden Feliz pero no mucho.</p>
        </div>
    </div>
  )
}

export default ComoSerFeliz