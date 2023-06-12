import React from 'react'
import styles from './CardMe.module.css'
import { Link } from 'react-router-dom'
import {IoLocationOutline} from 'react-icons/io5'
import { AiOutlineInstagram, AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import  imgJpg from '../../pictures/img/foto-principal.jpg'
import  imgWebp from '../../pictures/img/foto-principal.webp'
import  imgAvif from '../../pictures/img/foto-principal.avif'

function CardMe() {
  return (
    <div className={`rounded px-3 py-3 ${styles.cardMe}`}>
      <div className=''>
        <header className={`${styles.header}`}>
          <picture className={`${styles.picture}`}>
              <source srcSet={imgAvif} type='image/avif'/>
              <source srcSet={imgWebp} type='image/webp'/>
              <img className={`${styles.img}`} loading='lazy' width='138' height='138' src={imgJpg} alt='' />
          </picture>

          <div className={styles.headerContent}>
            <h2 className={styles.title}>Fernando</h2>
            <p className='flex flex-row justify-start gap-2'><IoLocationOutline color='gray' size={23}/><span className=''>Sinaloa, México</span></p>
          </div>
        </header>
        <div className='flex flex-column gap-2 mt-3'>
          <Link className={styles.btn} to='/fernando-panduro'>Conoceme</Link>
          <a className={styles.btn} href="https://www.linkedin.com/in/fernando-panduro/" title="Linkedin de Fernando Panduro" target="_blank" rel="noopener noreferrer"><AiFillLinkedin size={27} color='white'/><span>Linkedin</span></a>
          <a className={styles.btn} href="http://instagram.com/fernandpha" title="Instagram de Fernando Panduro" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram size={27} color='white'/><span>Instagram</span></a>
          <a className={styles.btn} href="https://www.youtube.com/@fernandopanduro/" title="Youtube de Fernando Panduro" target="_blank" rel="noopener noreferrer"><AiFillYoutube size={27} color='white'/><span>Youtube</span></a>
          <a className={styles.btn} href="https://github.com/fernandopanduro" title="Github de Fernando Panduro" target="_blank" rel="noopener noreferrer"><AiFillGithub size={27} color='white'/><span>Github</span></a>
        </div>
      </div>
    </div>
  )
}

export default CardMe