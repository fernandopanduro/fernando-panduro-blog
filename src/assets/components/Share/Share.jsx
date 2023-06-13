import { FiShare2 } from 'react-icons/fi';
import { BsFacebook, BsTwitter, BsPinterest, BsWhatsapp,  } from 'react-icons/bs';

import styles from './Share.module.css'
function Share() {
  const pathname = window.location.pathname; 
  return (
    <div className={`${styles.shares}`}>
        <span><FiShare2 size={21} /> Compartir</span>
        <ul className={`${styles.sharesList}`}>
            <li className={`${styles.sharesItem}`}><a target='_blank' title='Compartir por Facebook' href={`https://www.facebook.com/sharer/sharer.php?u=https://ferpanduro.com${pathname}`} className={`${styles.sharesBtn}`} rel='noopener noreferrer'><BsFacebook size={21} /></a></li>
            <li className={`${styles.sharesItem}`}><a target='_blank' title='Compartir por Twitter' href={`https://www.twitter.com/intent/tweet?text=Fernando-Panduro&url=www.ferpanduro.com${pathname}`} className={`${styles.sharesBtn}`} rel='noopener noreferrer'><BsTwitter size={21} /></a></li>
            <li className={`${styles.sharesItem}`}><a target='_blank' title='Compartir por Pinterest' href={`https://www.pinterest.com/pin/find/?url=https://ferpanduro.com${pathname}`} className={`${styles.sharesBtn}`} rel='noopener noreferrer'><BsPinterest size={21} /></a></li>
            <li className={`${styles.sharesItem}`}><a target='_blank' title='Compartir por Whatsapp' href={`https://api.whatsapp.com/send?text=www.ferpanduro.com${pathname}`} className={`${styles.sharesBtn}`} rel='noopener noreferrer'><BsWhatsapp size={21} /></a></li>
        </ul>
    </div>
  )
}

export default Share