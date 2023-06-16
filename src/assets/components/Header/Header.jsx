import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';

import styles from './Header.module.css'

import { Fade } from 'react-reveal';

export default function Header() {

    const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div className={`${styles.headerContainer} flex`}>
      <Fade top>  
        <header className={`${styles.header} flex container`}>
          <Link to='/'><h1 className={`${styles.title} h3`}>Fernando Panduro</h1></Link>
            <button aria-label="Menu" name='Menu' title='Menu' onClick={() => setIsOpen(!isOpen)} className={`${styles.barsMenu} flex`}>
                <div className={`${styles.barMenu1} ${isOpen && styles.activebarMenu1}`}></div>
                <div className={`${styles.barMenu2} ${isOpen && styles.activebarMenu2}`}></div>
                <div className={`${styles.barMenu3} ${isOpen && styles.activebarMenu3}`}></div>
            </button>
            <nav className={styles.nav}>
              <ul className={`flex flex-row gap-4 ${styles.list}`}>
                <li className={styles.listItem}><Link className='text-white' to='/'>Home</Link></li>
                <li className={styles.listItem}><Link className='text-white' to='/blogs'>Blogs</Link></li>
                <li className={styles.listItem}><Link className='text-white' to='/portfolio'>Portafolio</Link></li>
                {/* <li className={styles.listItem}><Link className='text-white' to='/tienda'>Tienda</Link></li> */}
                <li className={styles.listItem}><Link className='text-white' to='/fernando-panduro'>Conoceme</Link></li>
              </ul>
            </nav>      
        </header>
      <nav className={`${styles.navMobile} ${isOpen && styles.hidden}`} onClick={() => setIsOpen(!isOpen)}>
        <ul className={`container ${styles.listMobile}`}>
          <li className={styles.listItemMobile}><Link className='text-white' to='/'>Home</Link></li>
          <li className={styles.listItemMobile}><Link className='text-white' to='/blogs'>Blogs</Link></li>
          <li className={styles.listItemMobile}><Link className='text-white' to='/portfolio'>Portafolio</Link></li>
          {/* <li className={styles.listItemMobile}><Link className='text-white' to='/tienda'>Tienda</Link></li> */}
          <li className={styles.listItemMobile}><Link className='text-white' to='/fernando-panduro'>Conoceme</Link></li>
        </ul>
        <ul className={`container ${styles.listSocialMedia}`}>
          <li><a href="https://github.com/fernandopanduro" title="Github de Fernando Panduro" target="_blank" rel="noopener noreferrer"><AiFillGithub size={27} color='white'/></a></li>
          {/* <li><a href="https://www.youtube.com/@fernandopanduro/" title="Youtube de Fernando Panduro" target="_blank" rel="noopener noreferrer"><AiFillYoutube size={27} color='white'/></a></li> */}
          <li><a href="https://www.linkedin.com/in/fernando-panduro/" title="Linkedin de Fernando Panduro" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={27} color='white'/></a></li>
          <li><a href="http://instagram.com/fernandpha" title="Instagram de Fernando Panduro" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram size={27} color='white'/></a></li>
        </ul>
      </nav>
      </Fade>
    </div>
  )
}
