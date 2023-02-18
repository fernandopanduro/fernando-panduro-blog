import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Conoceme.module.css';

function Conoceme() {
  return (
    <div className={`${styles.containerConoceme} flex`}>
        <Helmet>
          <title>Quien es Fernando Panduro</title>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Quién es Fernando Panduro" />
          <meta property="og:description" content="Fernando Panduro, nacido el 3 de junio en Culiacán, Sinaloa, es un autodidacta apasionado de la tecnología y los proyectos sociales." />
          <meta property="og:url" content="https://ferpanduro.com/fernando-panduro/" />
          <meta property="og:image" content="https://github.com/fernandopanduro/fernando-panduro-blog/blob/f9e60decd88c08c44bf732242c32b1e66e76d1c4/src/assets/pictures/img/realidad-virtual-4.jpg" />
          <meta name="description" content="Fernando Panduro, nacido el 3 de junio en Culiacán, Sinaloa, es un autodidacta apasionado de la tecnología y los proyectos sociales." />

          <meta property="article:published_time" content="2023-02-15T06:29:07.000Z" />
          <meta property="article:modified_time" content="2023-02-15T21:17:20.000Z" />
          <meta property="article:publisher" content="http://instagram.com/fernandpha" />
          <meta property="article:author" content="http://instagram.com/fernandpha" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Quién es Fernando Panduro" />
          <meta name="twitter:description" content="Fernando Panduro, nacido el 3 de junio en Culiacán, Sinaloa, es un autodidacta apasionado de la tecnología y los proyectos sociales." />
          <meta name="twitter:url" content="https://ferpanduro.com/fernando-panduro/" />
          <meta name="twitter:image" content="https://github.com/fernandopanduro/fernando-panduro-blog/blob/f9e60decd88c08c44bf732242c32b1e66e76d1c4/src/assets/pictures/img/realidad-virtual-4.jpg" />
          <meta name="twitter:label1" content="Written by" />
          <meta name="twitter:data1" content="Fernando Panduro" />
          <meta name="twitter:site" content="@fernanpha" />
          <meta name="twitter:creator" content="@fernanpha" />

          <meta property="og:image:width" content="2000" />
          <meta property="og:image:height" content="1125" />

        </Helmet>
        <div className={`${styles.conoceme} container`}>
            <h2 className={`${styles.title}`}>Quien es Fernando Panduro?</h2>
            <p className={`${styles.paragrath}`}>Fernando Panduro, nacido el 3 de junio en Culiacán, Sinaloa, es un autodidacta apasionado de la tecnología y los proyectos sociales.</p>
            <p className={`${styles.paragrath}`}>Desde los 16 años, Fernando comenzó a leer, a hacer cursos densos de programación y a estudiar para grandes exámenes, lo que le permitió obtener un conocimiento sólido y amplio sobre su campo de interés.</p>
            <p className={`${styles.paragrath}`}>Su interés y curiosidad lo llevaron a estudiar Ingeniería de Software en la Universidad de Colima y más tarde, Ingeniería en Informática.</p>
            <p className={`${styles.paragrath}`}>Con su conocimiento y habilidades en tecnología, Fernando ha creado proyectos sociales innovadores para ayudar a las personas en su comunidad y en otras partes del mundo. Además, su canal de YouTube se ha convertido en una fuente de información valiosa sobre programación y tendencias en tecnología.</p>
            <p className={`${styles.paragrath}`}>Pero, aunque Fernando es un experto en tecnología, no se limita solo a eso. Él también es un amante de la naturaleza y un apasionado de las actividades al aire libre.</p>
            <p className={`${styles.paragrath}`}>Criado en el rancho, Fernando ha dominado el arte de montar a caballo y disfruta de las carreras de caballos. Además, se le puede encontrar montando en bicicleta por el Malecón de Mazatlán, por carreteras y por terracerías en sus fines de semana.</p>
            <p className={`${styles.paragrath}`}>Fernando ha vivido en varias ciudades de México, incluyendo Culiacán, Mazatlán, Colima, Guadalajara y Puerto Morelos en Quintana Roo.</p>
            <p className={`${styles.paragrath}`}>Siempre busca estar aprendiendo constantemente, por lo que consume muchos cursos y libros para aumentar su conocimiento. Siempre encuentra tiempo para divertirse y explorar nuevas actividades, como navegar en yates por la Bahía de Mazatlán o andar en moto y viajar en ella.</p>
            <p className={`${styles.paragrath}`}>También tiene una afición por los animales exóticos, en particular los changos, y tiene tres en su posesión: Mika, Tita y Monkey, quienes le proporcionan mucha diversión.</p>
            <p className={`${styles.paragrath}`}>En resumen, Fernando Panduro es un hombre de muchos talentos, cuya pasión por la tecnología y la naturaleza lo lleva a explorar y experimentar cosas nuevas cada día. Él es una inspiración para aquellos que quieren lograr sus metas y divertirse al mismo tiempo.</p>
        </div>
    </div>
  )
}

export default Conoceme