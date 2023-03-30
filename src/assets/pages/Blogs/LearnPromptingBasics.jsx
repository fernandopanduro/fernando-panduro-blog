import React from 'react';

import styles from './Blogs.module.css';
import { Bar } from '../../components/Bar/Bar.jsx';

import imgJpg from '../../pictures/img/ai-black.jpg';
import imgAvif from '../../pictures/img/ai-black.avif';
import imgWebp from '../../pictures/img/ai-black.webp';

import imgJpg2 from '../../pictures/img/woman-hacker.jpg';
import imgAvif2 from '../../pictures/img/woman-hacker.avif';
import imgWebp2 from '../../pictures/img/woman-hacker.webp';

import imgJpg3 from '../../pictures/img/openai-black.jpg';
import imgAvif3 from '../../pictures/img/openai-black.avif';
import imgWebp3 from '../../pictures/img/openai-black.webp';

import imgJpg5 from '../../pictures/img/phone-gpt2.jpg';
import imgAvif5 from '../../pictures/img/phone-gpt2.avif';
import imgWebp5 from '../../pictures/img/phone-gpt2.webp';

export default function LearnPromptingBasics() {
  return (
    <div className={`${styles.containerBlogs} flex container`}>
        <div className={`${styles.blogs} flex`}>
            <h2 className='text-center'>🚀 Prompt Engineer: la habilidad del futuro en Inteligencia Artificial</h2>
            <Bar />

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif5} type='image/avif'/>
              <source srcSet={imgWebp5} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg5} alt='ChatGPT' />
            </picture>

            <p>¡Perfecto! 🎉 Comencemos con los fundamentos de la Inteligencia Artificial (IA) 🧠. La IA es un algoritmo inteligente que piensa como los humanos 👥. Es útil para automatizar tareas repetitivas, pero muchas veces necesita que un humano la dirija y le dé instrucciones 🤖💭.</p>

            <p>Una forma de instruir a una IA para que realice una tarea es a través del proceso de Promoting 🚀. El Promoting es simplemente darle instrucciones a la IA para que realice una tarea específica. Un ejemplo de Promoting es asignarle un rol a la IA, por ejemplo, "Eres un médico" o "Eres un abogado" 👨‍⚕️👨‍⚖️.</p>

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif3} type='image/avif'/>
              <source srcSet={imgWebp3} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg3} alt='ChatGPT' />
            </picture>

            <p>Existen diferentes tipos de Prompts 📋, como los estándares, que son aquellos que únicamente le hacen una pregunta a la IA, como "¿Cuál es la capital de Francia?" 🗼 También existen los Few Shot Standard Prompts, que contienen el ejemplo en el input que se introduce, como "¿Cuál es la capital de España? - Madrid ¿Cuál es la capital de Italia? - Roma" 🇪🇸🇮🇹.</p>

            <p>Los prompts pueden incluir contexto, instrucciones, ejemplos, preguntas, respuestas e incluso otros prompts 🤔. Al agregar contexto y ejemplos adicionales, podemos mejorar el rendimiento de las IAs 📈.</p>

            <p>Otro aspecto importante de la IA es el chatbot con Inteligencia Artificial 🤖💬, un modelo que puede recordar el historial y contexto de la conversación. Los chatbots solo son valiosos si hay contexto y buenos prompts 🗣️. El ChatGPT es un ejemplo de un chatbot con IA que difiere del GPT-3 en su capacidad para recordar el historial y el contexto de la conversación 🤝.</p>

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif} type='image/avif'/>
              <source srcSet={imgWebp} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg} alt='ChatGPT' />
            </picture>

            <p>Es posible modificar los prompts para mejorar la calidad de las respuestas de la IA 📝. Por ejemplo, darle un estilo coloquial, amistoso e informal a la respuesta, agregar descripciones con adjetivos, o utilizar la inducción preliminar para afectar la estructura y especificación de la respuesta 🤗.</p>

            <p>También es importante mencionar que existen diferentes tipos de IAs 🖼️🎶🎥, como las que generan texto, audio, música, imágenes e incluso videos. No todas las IAs están en un nivel útil para su uso e implementación en la vida cotidiana 🚫.</p>

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif2} type='image/avif'/>
              <source srcSet={imgWebp2} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg2} alt='ChatGPT' />
            </picture>

            <p>En resumen, la IA es un algoritmo inteligente que piensa como los humanos y es útil para automatizar tareas repetitivas 🧠🤖. El Promoting es el proceso de instruir a una IA para que realice una tarea específica, y existen diferentes tipos de prompts para darle instrucciones a la IA 🚀📋. La IA también puede utilizarse en chatbots con IA, que pueden recordar el historial y el contexto de la conversación 🗣️💬. Es posible modificar los prompts para mejorar la calidad de las respuestas de la IA 🤔📝, y existen diferentes tipos de IAs para generar texto, audio, música, imágenes e incluso videos 🖼️🎶🎥.</p>
            
        </div>
    </div>
  )
}
