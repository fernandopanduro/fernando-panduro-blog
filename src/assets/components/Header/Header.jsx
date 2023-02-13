import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css'

export default function Header() {

    const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div className={`${styles.headerContainer} flex`}>
        <header className={`${styles.header} flex container`}>
          <Link to='/'><h1 className={`${styles.title} h3`}>Fernando Panduro</h1></Link>
            {/* <button onClick={() => setIsOpen(!isOpen)} className={`${styles.barsMenu} flex`}>
                <div className={`${styles.barMenu1} ${isOpen && styles.activebarMenu1}`}></div>
                <div className={`${styles.barMenu2} ${isOpen && styles.activebarMenu2}`}></div>
                <div className={`${styles.barMenu3} ${isOpen && styles.activebarMenu3}`}></div>
            </button> */}
        </header>
    </div>
  )
}
