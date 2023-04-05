import React from 'react'
import styles from './Blogs.module.css' 
import { Helmet } from 'react-helmet'
import { Bar } from '../../components/Bar/Bar'

import imgJpg from '../../pictures/img/openai-white.jpg';
import imgWebp from '../../pictures/img/openai-white.webp';
import imgAvif from '../../pictures/img/openai-white.avif';

import imgJpg2 from '../../pictures/img/ChatGPT.jpg';
import imgWebp2 from '../../pictures/img/ChatGPT.webp';
import imgAvif2 from '../../pictures/img/ChatGPT.avif';

import imgJpg3 from '../../pictures/img/phone-gpt2.jpg';
import imgWebp3 from '../../pictures/img/phone-gpt2.webp';
import imgAvif3 from '../../pictures/img/phone-gpt2.avif';

export default function LearnPromptingIntermedie() {
  return (
    <div className={`${styles.containerBlogs} flex container`}>
        <Helmet>
            <title>🤖 LLMs: ¿La solución a nuestros problemas o el comienzo del apocalipsis? | Fernado Panduro</title>
            <meta name="description" content='🌎 ¡Bienvenidos al mundo de los modelos de lenguaje! Los LLM (por sus siglas en inglés, Language Models) son la nueva sensación en el mundo de la tecnología. A diferencia de los humanos, estos modelos no necesitan dormir, comer ni descansar. Pueden procesar información 24/7 sin parar. Entonces, ¿qué podría salir mal? 😬' />
        </Helmet>
        <div className={`${styles.blogs} flex`}>
            <h2 className='text-center'>🤖 LLMs: ¿La solución a nuestros problemas o el comienzo del apocalipsis?</h2>
            <Bar />

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif} type='image/avif'/>
              <source srcSet={imgWebp} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg} alt='' />
            </picture>

            <p>🌎 ¡Bienvenidos al mundo de los modelos de lenguaje! Los LLM (por sus siglas en inglés, Language Models) son la nueva sensación en el mundo de la tecnología. A diferencia de los humanos, estos modelos no necesitan dormir, comer ni descansar. Pueden procesar información 24/7 sin parar. Entonces, ¿qué podría salir mal? 😬</p>

            <p>Antes de profundizar en el tema, es importante entender que los LLMs son un nivel intermedio de aprendizaje. Son capaces de hacer tareas de aritmética, sentido común y razonamiento, pero solo si se les da la oportunidad de explicar su razonamiento. Eso nos lleva al primer tema importante: la cadena de pensamiento. 🔍💡</p>

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif2} type='image/avif'/>
              <source srcSet={imgWebp2} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg2} alt='' />
            </picture>

            <p>La cadena de pensamiento, también conocida como Chain of Thought, es un método que incentiva a los LLMs a explicar el razonamiento que tuvieron para llegar a su respuesta. Este método es efectivo para mejorar los resultados en tareas de aritmética, sentido común y razonamiento. Pero ojo, ¡no funciona con todos los modelos! Solo aquellos con 100B de parámetros. ¿Qué es un parámetro? 🤯 ¿No sé tú, pero a mí me suena a algo que no quiero saber más.</p>

            <p>Pero no te preocupes, hay una solución para aquellos modelos que no tienen suficientes parámetros. Es el Zero Shot Chain of Thought, también conocido como la Cadena de Pensamiento Tiro Cero. 🧠 La idea es agregar la frase "Pensemos paso a paso" al final del prompt para mejorar las respuestas del LLM. También se pueden utilizar frases como "Resolvamos Este problema dividiéndolo en pasos" o "Pensemos en esto lógicamente". ¡Ah, la lógica! 🔍 Si solo el mundo fuera más lógico... 🌎</p>

            <p>🚀👌🏼 Pero espera, hay más. La autoconsistencia es otro método que puede mejorar los resultados de los LLMs en tareas de aritmética, razonamiento y simbólico. En lugar de generar una sola cadena de pensamiento, se generan múltiples cadenas de pensamiento y luego se toma la respuesta mayoritaria como respuesta final. ¡Una respuesta democrática! ¡Eso suena justo!  🤝🏼💡</p>

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif3} type='image/avif'/>
              <source srcSet={imgWebp3} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg3} alt='' />
            </picture>

            <p>Por último, pero no menos importante, está la generación de conocimiento. 😎 En lugar de simplemente generar una respuesta, le pides al LLM que genere información potencialmente útil sobre la pregunta antes de generar la respuesta. 💡 ¡Así es como se obtienen respuestas más inteligentes! 👏 Por ejemplo, si se trata de responder la pregunta "La mayoría de los canguros tienen extremidades", puedes pedir al LLM que genere un conjunto de hechos sobre la pregunta antes de responderla. Luego, al concatenar cada hecho con la pregunta, obtienes preguntas aumentadas con conocimiento que pueden mejorar las respuestas de sentido común. 💪 ¡Ingenioso! 🤩</p>

            <p>En resumen, los LLMs son una herramienta prometedora en el mundo de la tecnología. Con la cadena de pensamiento, el Zero Shot Chain</p>

        </div>
    </div>
  )
}
