import React from 'react'

import styles from './Blogs.module.css';
import { Bar } from '../../components/Bar/Bar';

import imgJpg from '../../pictures/img/ChatGPT.jpg';
import imgAvif from '../../pictures/img/ChatGPT.avif';
import imgWebp from '../../pictures/img/ChatGPT.webp';

import imgJpg2 from '../../pictures/img/chatGPT3.jpeg';
import imgAvif2 from '../../pictures/img/chatGPT3.avif';
import imgWebp2 from '../../pictures/img/chatGPT3.webp';

import imgJpg3 from '../../pictures/img/openAI.jpg';
import imgAvif3 from '../../pictures/img/openAI.avif';
import imgWebp3 from '../../pictures/img/openAI.webp';

function chatgpt() {
  return (
    <div className={`${styles.containerBlogs} flex container`}>
      <div className={`${styles.blogs} flex`}>
          <h2 className='text-center'>La respuesta a tus preguntas: ChatGPT</h2>
          <Bar />

          <picture className={`${styles.picture}`}>
            <source srcSet={imgAvif} type='image/avif'/>
            <source srcSet={imgWebp} type='image/webp'/>
            <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg} alt='ChatGPT' />
          </picture>

          <p>Imagina que estás en casa una noche, después de un día largo y agotador en el trabajo. Tienes una pregunta que te ronda la cabeza y no puedes encontrar la respuesta. ¿Qué haces en una situación así? Por supuesto, te metes en internet y empiezas a buscar. Pero hay tantos resultados y tantas páginas que es difícil saber por dónde empezar. ¿Te suena familiar?</p>
          <p>Pues imagina que en ese momento tienes a mano el chat de OpenAI. Con solo unos pocos clics, puedes preguntar cualquier cosa que quieras y recibir una respuesta precisa y confiable en poco tiempo. Es así de fácil.</p>

          <picture className={`${styles.picture}`}>
            <source srcSet={imgAvif2} type='image/avif'/>
            <source srcSet={imgWebp2} type='image/webp'/>
            <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg2} alt='ChatGPT3' />
          </picture>

          <p>Pero, ¿cómo es posible esto? Bueno, detrás del chat de OpenAI se encuentra ChatGPT, una red neuronal entrenada con millones de textos y conversaciones. Esta tecnología avanzada de lenguaje natural permite a ChatGPT comprender el contexto de las preguntas y producir respuestas coherentes y precisas.</p>
          <p>Y no solo es útil para investigaciones serias, también puedes usar el chat de OpenAI para experimentar y tener un poco de diversión. Haz preguntas divertidas y desafiantes y verás cómo ChatGPT responde. Será una forma divertida de aprender sobre la tecnología y la inteligencia artificial en general.</p>

          <picture className={`${styles.picture}`}>
            <source srcSet={imgAvif3} type='image/avif'/>
            <source srcSet={imgWebp3} type='image/webp'/>
            <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg3} alt='Open AI' />
          </picture>

          <p>En resumen, el chat de OpenAI es una herramienta valiosa y accesible para todos aquellos interesados en la inteligencia artificial y la tecnología. Ofrece una forma fácil y eficiente de obtener información sobre un amplio rango de temas, y también es una plataforma divertida para experimentar con la tecnología de lenguaje natural. Ya no tendrás que perder tiempo buscando la respuesta a tus preguntas, ¡el chat de OpenAI está aquí para ayudarte!</p>
      </div>
    </div>
  )
}

export default chatgpt