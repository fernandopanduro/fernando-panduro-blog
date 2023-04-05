import React from 'react'
import styles from './Blogs.module.css'
import { Helmet } from 'react-helmet'
import { Bar } from '../../components/Bar/Bar'

import imgJpg from '../../pictures/img/moster-dalle.jpg';
import imgWebp from '../../pictures/img/moster-dalle.webp';
import imgAvif from '../../pictures/img/moster-dalle.avif';

import imgJpg2 from '../../pictures/img/fish-dalle.jpg';
import imgWebp2 from '../../pictures/img/fish-dalle.webp';
import imgAvif2 from '../../pictures/img/fish-dalle.avif';

import imgJpg3 from '../../pictures/img/colina-dalle.png';
import imgWebp3 from '../../pictures/img/colina-dalle.webp';
import imgAvif3 from '../../pictures/img/colina-dalle.avif';

import imgJpg4 from '../../pictures/img/aliens-dalle.png';
import imgWebp4 from '../../pictures/img/aliens-dalle.webp';
import imgAvif4 from '../../pictures/img/aliens-dalle.avif';

import imgJpg5 from '../../pictures/img/ia-shipost.jpeg';
import imgWebp5 from '../../pictures/img/ia-shipost.webp';
import imgAvif5 from '../../pictures/img/ia-shipost.avif';

export default function LearnPromptingCreateImages() {
  return (
    <div className={`${styles.containerBlogs} flex container`}>
        <Helmet>
            <title>¡Mira ma, sin manos 🖖! Cómo las IAs están cambiando el juego de la creación de imágenes | Fernado Panduro</title>
            <meta name="description" content='¿Estás harto de pasar horas buscando la foto perfecta para tu perfil de Instagram? 😫 ¿Cansado de que tus fotos parezcan tomadas con una patata? 🍟 ¡No te preocupes! La inteligencia artificial está aquí para salvar el día (y tus fotos). En este ensayo, vamos a explorar cómo las IAs pueden generar imágenes impresionantes con solo unos pocos ajustes en el prompt. 🤯🖼️ Prepárate para decir adiós a tus días de parecer un troll en las redes sociales y hola a tu nueva imagen de perfil hiperrealista y asombrosa. 📷' />
        </Helmet>
        <div className={`${styles.blogs} flex`}>
            <h2 className='text-center'>¡Mira ma, sin manos 🖖! Cómo las IAs están cambiando el juego de la creación de imágenes</h2>
            <Bar />

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif} type='image/avif'/>
              <source srcSet={imgWebp} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg} alt='Mouestro morado hecho por Dalle' />
            </picture>

            <p>¿Estás harto de pasar horas buscando la foto perfecta para tu perfil de Instagram? 😫 ¿Cansado de que tus fotos parezcan tomadas con una patata? 🍟 ¡No te preocupes! La inteligencia artificial está aquí para salvar el día (y tus fotos). En este ensayo, vamos a explorar cómo las IAs pueden generar imágenes impresionantes con solo unos pocos ajustes en el prompt. Prepárate para decir adiós a tus días de parecer un troll en las redes sociales y hola a tu nueva imagen de perfil hiperrealista y asombrosa. 📷</p>

            <p>Primero que nada, hablemos de la dificultad de crear la imagen perfecta. No hay nada como pasar horas eligiendo el mejor filtro para tu foto de Instagram, ¿verdad? Ahora imagina tener que crear una imagen desde cero. Es un desafío abismal. ¿Por qué es tan difícil? 🤔 Bueno, porque las imágenes son subjetivas y carecen de métricas para medir la precisión. La inteligencia artificial nos está ayudando a crear imágenes impresionantes con una precisión increíble. 🤯</p>

            <p>Crear la imagen perfecta es un desafío abismal, y a lo largo de los años, hemos intentado encontrar la mejor manera de crear imágenes que sean lo más precisas y bellas posible. 🖼️ La creación de imágenes con inteligencia artificial (IA) ha sido un avance significativo en la industria de la imagen, y ha permitido a los artistas y diseñadores crear imágenes sorprendentes y fascinantes. 🤝</p>

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif2} type='image/avif'/>
              <source srcSet={imgWebp2} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg2} alt='pez hecho por Dalle' />
            </picture>

            <p>Por supuesto, esto no significa que no tengamos que trabajar duro para lograr la imagen perfecta. 💪🔧 Todavía hay un proceso iterativo de selección de las mejores imágenes e ir modificando los prompts para mejorar las imágenes. Pero, ¿cómo hacemos esto de manera más eficiente y divertida? 💭 ¡Con modificadores de estilos y potenciadores de calidad! 🎉</p>

            <p>Los modificadores de estilos permiten ajustar el estilo de la imagen generada, mientras que los potenciadores de calidad mejoran la calidad de la imagen sin sacrificar la resolución. 🎭 Con estas herramientas, los artistas y diseñadores pueden trabajar de manera más rápida y efectiva, obteniendo resultados impresionantes en menos tiempo. 🎨</p>

            <p>Una de las principales ventajas de la IA es su capacidad para generar imágenes a partir de descripciones detalladas. Por ejemplo, podemos utilizar palabras modificadoras para producir resultados consistentes con ciertos tipos de estilos. Si queremos una imagen fotorealista, simplemente podemos utilizar la palabra "fotorealista" como un modificador de estilo en nuestra descripción. O si queremos una imagen que se asemeje al trabajo de un artista en particular, como Greg Rutkowski o Christopher Nolan, simplemente utilizamos sus nombres como modificadores de estilo en nuestra descripción.</p>

            <p>🖋️ ¡Con estas herramientas, las posibilidades creativas son infinitas! 👀 Y quién sabe, tal vez incluso podamos utilizar la IA para crear imágenes de mundos alienígenas y paisajes cósmicos. 🪐👽</p>

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif4} type='image/avif'/>
              <source srcSet={imgWebp4} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg4} alt='' />
            </picture>

            <p>Por otro lado, los potenciadores de calidad son los terminales que se utilizan para mejorar la calidad de las fotos sin influir en el estilo. Estos pueden ser difíciles de distinguir de los modificadores de estilos, pero algunos ejemplos incluyen "Alta resolución", "2k", "4k", "Claro", "💡Buena iluminación", "Detallado", "Altamente detallado", "Nítido", "Hermoso", "Alta calidad", "🖼️ Realista", "Hiperrealista", "🎨 Obra maestra", "Impresionante" y "Asombroso". ¡Solo asegúrate de no abusar del término "Impresionante", o pronto perderá su impacto!</p>

            <p>🔁 La repetición es otra técnica que puede mejorar la calidad de la generación de imágenes. Repetir la misma palabra dentro de una consulta hará que esa palabra se resalte en el resultado. Por ejemplo, "una pintura 🌅 muy muy muy muy muy muy muy muy muy muy hermosa de una colina 🏞️ junto a una cascada 🌊" puede generar una imagen más hermosa que "una pintura de una colina junto a una cascada".</p>

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif3} type='image/avif'/>
              <source srcSet={imgWebp3} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg3} alt='Colina con cascada hecha por Dalle' />
            </picture>

            <p>👉🏼 Además, se pueden utilizar términos ponderados para dar mayor relevancia a algunas palabras sobre otras en el prompt. También se pueden utilizar para sumar o restar importancia ➕➖. Por ejemplo, "colina | árbol:-10" dará menos importancia al árbol 🌳 y más importancia a la colina 🏞️ en la imagen generada. </p>

            <p>Las generaciones de imágenes deformes son comunes, especialmente con partes del cuerpo como las manos y los pies. 😬 Podemos tratarlos con buenos prompts negativos. 🛡️ A medida que los generadores de imágenes avanzan, será menos común encontrar deformidades. Por ejemplo, el prompt "retrato mediano de estudio de Karely Ruiz saludando con sus manos, detallado, película, iluminación de estudio, lente de 90mm, por Martin Shoeller:6" probablemente generará manos deformes.</p>

            <p>👋 Podemos mejorar el prompt utilizando palabras como "deformidad, manos deformes, borrosas, mala anatomía, bizcas, no muertas, sobreexpuestas, subexpuestas, malos ojos, malas orejas, mala cara, malas manos, recortada: -5" para reducir la probabilidad de deformidades. Y si eso no funciona, siempre puedes simplemente reírte de las imágenes deformes y extrañas que generan. 😂</p>

            <p>🛣️ Si el viaje hacia la creación de imágenes es como un viaje por carretera, entonces Midjourney es como un GPS para tu creatividad. Pero no te preocupes, no necesitas un botón "recalcular ruta" si te pierdes en el camino. 🧭</p>

            <p>🚗 Midjourney es un algoritmo que ayuda a las IAs a aprender de sus errores y a corregir el rumbo para llegar a la imagen perfecta. Es como tener a tu madre en el asiento del copiloto, solo que en lugar de decir "gira a la izquierda aquí", te dice "hey, esa línea que hiciste está un poco torcida, corrígela así". </p>

            <p>Con Midjourney , las IAs pueden aprender de sus propios errores y mejorar la calidad de las imágenes que producen. Es como tener un entrenador personal para tu creatividad, pero sin tener que levantar pesas.</p>

            <p>Entonces, la próxima vez que te encuentres perdido en el camino hacia la creación de imágenes perfectas, recuerda que Midjourney está ahí para guiarte 🗺️. Y si no sabes por dónde empezar, siempre puedes preguntarle a tu GPS, perdón, Midjourney , qué camino tomar 🤔. ¡Feliz viaje hacia la creatividad!</p>

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif5} type='image/avif'/>
              <source srcSet={imgWebp5} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg5} alt='Shipost' />
            </picture>

            <p>La creación de imágenes con inteligencia artificial es un tema fascinante y en constante evolución. A medida que los modelos de IA se vuelven más avanzados y sofisticados, estamos presenciando un cambio en la forma en que las personas crean y consumen imágenes.</p>

            <p>Aunque la IA puede ayudarnos a generar imágenes de alta calidad, todavía no puede reemplazar la creatividad y el ojo humano 👁️. Al final del día, una imagen perfecta es subjetiva y es el resultado de la visión y habilidades del artista. </p>

            <p>Mientras tanto, podemos seguir divirtiéndonos experimentando con diferentes prompts y modificadores de estilo, y esperar a ver qué sorpresas nos depara el futuro de la IA en la creación de imágenes. 💭 Mientras tanto, sigamos disfrutando de las imágenes graciosas y curiosas que la IA nos brinda. 📸</p>

        </div>
    </div>
  )
}
