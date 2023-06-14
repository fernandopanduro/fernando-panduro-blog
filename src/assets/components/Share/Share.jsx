import { FiShare2 } from 'react-icons/fi';
import { BsFacebook, BsTwitter, BsWhatsapp,  } from 'react-icons/bs';
import { FaCopy } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './Share.module.css'
import { useState } from 'react';

const Modal = ({open, close}) => {
  const url = window.location.href;
  const copy = () => {
    navigator.clipboard.writeText(url);
  }

  if (!open) return null
  return (
    <div className={`rounded ${styles.modal}`}>
      <div className='flex flex-row justify-between'>
        <p className={styles.shareText}>Compartir</p>
        <AiOutlineClose className={styles.close} onClick={close} size={30}/>
      </div>
      <label className={styles.label} htmlFor='modal'>Copia el link para compartirlo</label>
      <div className={styles.inputContainer}>
        <input className={styles.input} type="text" name="" defaultValue={url} id="modal" />
        <div className={styles.tooltip}>
          <FaCopy className={styles.copy} size={21} onClick={copy}/>
          <span className={styles.tooltiptext}>Copiado</span>
        </div>
        
      </div>
    </div>
  )
}

function Share() {
  const pathname = window.location.pathname; 
  const [ openModal,  setOpenModal ] = useState(false)
  return (
    <div className={`${styles.shares}`}>
        <Modal open={openModal} close={() => setOpenModal(false)} />
        <span><FiShare2 size={21} />Compartir</span>
        <ul className={`${styles.sharesList}`}>
            <li className={`${styles.sharesItem}`}><a target='_blank' title='Compartir por Facebook' href={`https://www.facebook.com/sharer/sharer.php?u=https://ferpanduro.com${pathname}`} className={`${styles.sharesBtn}`} rel='noopener noreferrer'><BsFacebook size={21} /></a></li>
            <li className={`${styles.sharesItem}`}><a target='_blank' title='Compartir por Twitter' href={`https://www.twitter.com/intent/tweet?text=Fernando-Panduro&url=www.ferpanduro.com${pathname}`} className={`${styles.sharesBtn}`} rel='noopener noreferrer'><BsTwitter size={21} /></a></li>
            <li className={`${styles.sharesItem}`}><a target='_blank' title='Compartir por Whatsapp' href={`https://api.whatsapp.com/send?text=www.ferpanduro.com${pathname}`} className={`${styles.sharesBtn}`} rel='noopener noreferrer'><BsWhatsapp size={21} /></a></li>
            <li className={`${styles.sharesItem}`}><FaCopy title='Copiar enlace' onClick={() => setOpenModal(!openModal)} size={21} /></li>
        </ul>
    </div>
  )
}

export default Share