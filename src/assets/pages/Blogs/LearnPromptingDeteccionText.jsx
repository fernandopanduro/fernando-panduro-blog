import React from 'react'
import { Bar } from '../../components/Bar/Bar'
import { Helmet } from 'react-helmet'
import styles  from './Blogs.module.css';

import imgJpg from '../../pictures/img/deteccion.jpg';
import imgWebp from '../../pictures/img/deteccion.webp';
import imgAvif from '../../pictures/img/deteccion.avif';

import imgJpg2 from '../../pictures/img/segurity.jpg';
import imgWebp2 from '../../pictures/img/segurity.webp';
import imgAvif2 from '../../pictures/img/segurity.avif';

import imgJpg3 from '../../pictures/img/phone-gpt.jpg';
import imgWebp3 from '../../pictures/img/phone-gpt.webp';
import imgAvif3 from '../../pictures/img/phone-gpt.avif';

export default function LearnPromptingDeteccionText() {
  return (
    <div className={`${styles.containerBlogs} flex container`}>
        <Helmet>
        <title>¡Cuidado con el impostor! 😱 ¿Qué pasa cuando la IA es demasiado buena en la generación de textos? 🤖 | Fernado Panduro</title>
        <meta name="description" content='¿Estás cansado de encontrarte con textos que parecen escritos por humanos, pero en realidad son obra de inteligencias artificiales? 😩🤖 Bueno, ¡tienes un problema en común con investigadores, educadores y cualquier otra persona que se preocupe por la calidad de los contenidos que lee! 📚👀 La detección de textos generados por IA es un tema de importancia mundial, y aquí te contamos todo lo que necesitas saber. 💡💻' />
        </Helmet>
        <div className={`${styles.blogs} flex`}>
            <h2 className='text-center'>¡Cuidado con el impostor! 😱 ¿Qué pasa cuando la IA es demasiado buena en la generación de textos? 🤖</h2>
            <Bar />

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif} type='image/avif'/>
              <source srcSet={imgWebp} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg} alt='' />
            </picture>

            <p>¿Estás cansado de encontrarte con textos que parecen escritos por humanos, pero en realidad son obra de inteligencias artificiales? 😩🤖 Bueno, ¡tienes un problema en común con investigadores, educadores y cualquier otra persona que se preocupe por la calidad de los contenidos que lee! 📚👀 La detección de textos generados por IA es un tema de importancia mundial, y aquí te contamos todo lo que necesitas saber. 💡💻</p>

            <p>La generación de textos utilizando inteligencia artificial es un tema que ha sido ampliamente discutido por los investigadores y educadores. Aunque la capacidad de la IA para generar texto puede ser impresionante, también puede plantear un gran problema para la detección de textos de IA. 🚫 La detección de textos de IA es un problema importante a nivel mundial, ya que las consecuencias de no poder detectarlos pueden ser significativas. 😱💥 En este ensayo, exploraremos algunos métodos utilizados para detectar textos generados por IA, así como algunos trucos ingeniosos para eludir los detectores. 🕵️‍♂️🕵️‍♀️</p>

            <p>Uno de los métodos más populares para detectar textos generados por IA es el clasificador de textos de OpenAI. 🤖📝 Este método funciona entrenando un detector con una gran cantidad de textos generados por IA, así como una gran cantidad de textos escritos por humanos inteligentes y profesionales. 💪👨‍💻 Aunque este método es efectivo, tiene algunas limitaciones. 🤔 Por ejemplo, no acepta textos de menos de 1000 palabras y tiene dificultades con los textos escritos por infantes o no hablantes del inglés. 🤷‍♂️👶</p>

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif2} type='image/avif'/>
              <source srcSet={imgWebp2} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg2} alt='' />
            </picture>

            <p>Otro método para detectar textos de IA es el método de marca de agua. 💦📝 Este método implica agregar una marca de agua al texto generado por la IA para poder identificarlo. 🔍🔬 Se agregan un conjunto de tokens al texto para identificar la IA que realizó el trabajo. 🤖👨‍💼 ¿Pero quién tiene tiempo para agregar marcas de agua a cada texto generado? ⏰🤔 Además, siempre hay alguien que encontrará la manera de eliminarlas. 🕵️‍♂️🚫</p>

            <p>Afortunadamente, los detectores GPT son cada vez más efectivos. 👍🤖 Se ha descubierto que las IAs tienden a generar textos que "ocupan regiones de curvatura negativa de la función de probabilidad logarítmica del modelo". 🤯📈 ¿Qué significa eso? Pues que se pueden crear detectores basados en el sistema de curvatura. 🔍👨‍🔬 ¡Así de fácil! 😎</p>

            <p>Sin embargo, hay varios trucos y maneras de eludir los detectores de IA. 😈 Una forma popular es a través de la edición del texto. 🖊️ Al editar el texto, se pueden reemplazar palabras por sinónimos o palabras similares, cambiar la sintaxis o el formato del texto. 🔄📝 También se pueden agregar emojis o caracteres inusuales, lo que parece perfectamente normal para cualquier persona, pero para un detector de IA, puede ser muy difícil de detectar. 😜🔍 ¡No hay nada como una buena edición para engañar a los detectores!</p>

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif3} type='image/avif'/>
              <source srcSet={imgWebp3} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg3} alt='' />
            </picture>

            <p>También puedes engañar al sistema al pedirle que escriba el texto en un formato específico. Pídele que hable de eventos emocionales y utilice experiencias de la vida real como ejemplos. 💭💕 Asegúrate de decirle que no siga los formatos literarios, sino que exprese sus pensamientos y deseos libremente. ¡De esa forma, los otros modelos de lenguaje no sabrán cómo identificar el texto generado por IA! 💻</p>

            <p>A medida que los generadores de texto de IA continúan avanzando a un ritmo acelerado, también lo hacen los modelos de detección de textos generados por IA. Si bien la generación de texto de IA puede parecer una solución útil y eficiente para muchos problemas, también presenta desafíos en términos de ética y responsabilidad. 🚨 Además, la detección de textos de IA es crucial para garantizar la integridad y la calidad de los contenidos que leemos y consumimos diariamente. 📚👀 Con el tiempo, es probable que los métodos de detección de textos de IA se vuelvan cada vez más sofisticados, lo que hará que sea más difícil para las IA eludirlos. 🔍</p>

            <p>Los profesionales y educadores pueden no estar de acuerdo con el uso de IAs para realizar tareas que deberían ser realizadas por humanos. Pero la realidad es que, a medida que avanza la tecnología, los generadores de texto seguirán mejorando y los métodos para detectarlos también. Así que, ¡cuidado con el impostor! 🤖⚠️</p>

        </div>
    </div>
  )
}
