import { AiFillInstagram, AiFillGithub, AiFillYoutube, AiFillLinkedin, AiFillCopy } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { Bar } from '../Bar/Bar';

import styles from './Footer.module.css';

export function Footer() {

    const today = new Date();
    const year = today.getFullYear();


    return (
        <footer className={`${styles.footer} flex`}>
            <section className={`${styles.footerContainer} flex container`}>

                <ul className={styles.listSocialMedia}>
                    <li><a href="https://www.linkedin.com/in/fernando-panduro/" title="Link a Linkedin de Fernando Pandur" target="_blank" rel="noopener noreferrer"><AiFillGithub size={27} color='white'/></a></li>
                    <li><a href="https://www.youtube.com/@fernandopanduro/" title="Link a Youtube de Fernando Panduro" target="_blank" rel="noopener noreferrer"><AiFillYoutube size={27} color='white'/></a></li>
                    <li><a href="https://github.com/fernandopanduro" title="Link a Github de Fernando Panduro" target="_blank" rel="noopener noreferrer"><AiFillLinkedin size={27} color='white'/></a></li>
                    <li><a href="http://instagram.com/fernandpha" title="Link a Instagram de Fernando Panduro" target="_blank" rel="noopener noreferrer"><AiFillInstagram size={27} color='white'/></a></li>
                </ul>

                <div>
                    <h4>Menu Principal</h4>
                    <Bar />
                    <ul className={`${styles.list} flex`}>    
                        <li><Link className={`${styles.listItem}`} to='/'>Inicio</Link></li>
                        <li><Link className={`${styles.listItem}`} to='/blogs'>Blogs</Link></li>
                        <li><Link className={`${styles.listItem}`} to='/tienda'>Tienda</Link></li>
                        <li><Link className={`${styles.listItem}`} to='/conoceme'>Conoceme</Link></li>
                    </ul>
                </div>
                
                <div>
                    <h4>Menu Secundario</h4>
                    <Bar /> 
                    <ul className={`${styles.list} flex`}>    
                        <li><Link className={`${styles.listItem}`} to='/privacidad'>Aviso de privacidad</Link></li>
                        <li><Link className={`${styles.listItem}`} to='/servicio'>Terminos de servicio</Link></li>
                        <li><Link className={`${styles.listItem}`} to='/reembolso'>Politica de reembolso</Link></li>
                    </ul>
                </div>

                <div>
                    <p>Hugo Fernando Garcia Panduro es un creador de contenido mexicano nacido en Culiacán, Sinaloa.</p>
                    <Bar /> 
                </div>

                <div>
                    <span>&copy; {year} Fernando Panduro</span>
                    <Bar /> 
                </div>

            </section>
        </footer>
    )
}