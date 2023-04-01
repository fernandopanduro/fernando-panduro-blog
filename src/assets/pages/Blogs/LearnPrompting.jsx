import React from 'react'

import styles from './Blogs.module.css';
import { Bar } from '../../components/Bar/Bar';

import imgJpg from '../../pictures/img/computer-coding2.jpg';
import imgAvif from '../../pictures/img/computer-coding2.avif';
import imgWebp from '../../pictures/img/computer-coding2.webp';

import imgJpg2 from '../../pictures/img/phone-gpt.jpg';
import imgAvif2 from '../../pictures/img/phone-gpt.avif';
import imgWebp2 from '../../pictures/img/phone-gpt.webp';

import imgJpg3 from '../../pictures/img/woman-coding.jpg';
import imgAvif3 from '../../pictures/img/woman-coding.avif';
import imgWebp3 from '../../pictures/img/woman-coding.webp';
import { Helmet } from 'react-helmet';

export default function LearnPrompting() {
  return (
    <div className={`${styles.containerBlogs} flex container`}>
      <Helmet>
        <title>Convertir a las IAs en tus aliados y potenciar tu productividad 🚀💻 | Fernando Panduro</title>
        <meta name="description" content='¿Quieres saber cómo sacar el máximo provecho de tus chatbots y otras herramientas de Inteligencia Artificial? ¡El prompting es la clave! 🗝️ Descubre cómo utilizar esta técnica para inducir a tus IAs a actuar de manera efectiva y promover el éxito de tu negocio. 📈' />
      </Helmet>

        <div className={`${styles.blogs} flex`}>
            <h2 className='text-center'>Convertir a las IAs en tus aliados y potenciar tu productividad 🚀💻</h2>
            <Bar />

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif} type='image/avif'/>
              <source srcSet={imgWebp} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg} alt='ChatGPT' />
            </picture>

            <p>¿Quieres saber cómo sacar el máximo provecho de tus chatbots y otras herramientas de Inteligencia Artificial? ¡El prompting es la clave! 🗝️ Descubre cómo utilizar esta técnica para inducir a tus IAs a actuar de manera efectiva y promover el éxito de tu negocio. 📈</p>

            <p>🤔 ¿Qué es el prompting?</p>

            <p>El prompting es una técnica utilizada en la programación de IAs que consiste en proporcionar una serie de sugerencias o pistas para inducir una respuesta específica. En lugar de esperar a que la IA adivine lo que quieres que haga, el prompting te permite guiar su comportamiento para que se ajuste mejor a tus necesidades. 🎯</p>

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif2} type='image/avif'/>
              <source srcSet={imgWebp2} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg2} alt='Phone ChatGPT' />
            </picture>

            <p>💡 ¿Cómo puede ayudarte el prompting?</p>

            <p>El prompting puede ayudarte a optimizar el rendimiento de tus IAs en múltiples áreas, incluyendo la atención al cliente, la automatización de procesos y la toma de decisiones. Al guiar la IA hacia un comportamiento específico, puedes reducir el tiempo y los recursos necesarios para alcanzar tus objetivos empresariales. 💼</p>

            <p>👨‍💻 ¿Cómo se utiliza el prompting en la práctica?</p>

            <p>Para utilizar el prompting en la práctica, primero debes comprender el comportamiento de tu IA y cómo se puede mejorar. Luego, debes crear una serie de comandos o sugerencias que guíen a la IA hacia el comportamiento deseado. Por ejemplo, si deseas que tu chatbot responda a las preguntas de los clientes de manera más eficiente, podrías crear una serie de comandos que lo ayuden a identificar las preguntas más frecuentes y proporcionar respuestas apropiadas. 🤖💬</p>

            <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif3} type='image/avif'/>
              <source srcSet={imgWebp3} type='image/webp'/>
              <img className={`${styles.img} rounded-1`} loading='lazy' width='200' height='300' src={imgJpg3} alt='Woman Coding' />
            </picture>

            <p>🚀 ¡Aprovecha al máximo tus IAs con el prompting!</p>

            <p>Si deseas sacar el máximo provecho de tus herramientas de IA y promover el éxito de tu negocio, el prompting es una técnica esencial que debes dominar. ¡Comienza a experimentar con el prompting hoy mismo y observa cómo tus IAs se convierten en tus mejores aliados empresariales! 💪🤖</p>

        </div>
    </div>
  )
}
