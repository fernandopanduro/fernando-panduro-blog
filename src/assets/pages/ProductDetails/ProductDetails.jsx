import React from 'react';

import styles from './ProductDetails.module.css';
import img from '../../pictures/img/img.jpg';   
import { Bar } from '../../components/Bar/Bar';
import {CardProduct} from '../../components/CardProduct/CardProduct';

import {IoPricetags} from 'react-icons/io5';
import {FaEye} from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi'
import { FiShare2 } from 'react-icons/fi';
import { BsFacebook, BsTwitter, BsPinterest, BsMessenger, BsWhatsapp,  } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

export const ProductDetails = () => {
  return (
    <div className={`${styles.containerProductDetails} flex`}>
        <div className={`${styles.productDetails} container`}>
            <div className={`${styles.conteinerImg}`}>
                <picture className={`${styles.picture}`}>
                    <source srcSet={img} type='image/avif'/>
                    <source srcSet={img} type='image/webp'/>
                    <img className={`${styles.img} rounded`} loading='lazy' width='200' height='300' src={img} alt='img' />
                </picture>
            </div>

            <Bar />

            <div className={`${styles.details} flex`}>
                <h2 className={`${styles.title} text-left`}>Producto perron de Fernando</h2>
                <span className={`${styles.price} text-left`}>$ 350.00 MXN</span>
                <div className={`${styles.box} rounded`}>
                    <span> <IoPricetags size={20} /> <strong>40 vendidos</strong> en las ultimas 48 horas</span>
                </div>
                <button className={`${styles.btn} rounded`}><BiShoppingBag size={21} /> Agregar al carrito</button>
                <div className={`${styles.box} rounded`}>
                    <ul>
                        <li><button></button></li>
                    </ul>
                    <span>Pago Seguro Garantizado</span>
                </div>
                <div className={`${styles.box} rounded`}>
                    <span> <FaEye size={20} /> <strong>26 personas</strong> estan viendo este producto</span>
                </div>
                <div className={`${styles.shares}`}>
                    <span><FiShare2 size={21} /> Compartir</span>
                    <ul className={`${styles.sharesList}`}>
                        <li className={`${styles.sharesItem}`}><button className={`${styles.sharesBtn}`}><BsFacebook size={21} /></button></li>
                        <li className={`${styles.sharesItem}`}><button className={`${styles.sharesBtn}`}><BsTwitter size={21} /></button></li>
                        <li className={`${styles.sharesItem}`}><button className={`${styles.sharesBtn}`}><BsPinterest size={21} /></button></li>
                        <li className={`${styles.sharesItem}`}><button className={`${styles.sharesBtn}`}><BsWhatsapp size={21} /></button></li>
                        <li className={`${styles.sharesItem}`}><button className={`${styles.sharesBtn}`}><SiGmail size={21} /></button></li>
                        <li className={`${styles.sharesItem}`}><button className={`${styles.sharesBtn}`}><BsMessenger size={21} /></button></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='container'>

            <h3 className='text-center'>Para ti...</h3>

            <div className={`${styles.cardsProducts}`}>

                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />

            </div>

        </div>
    </div>
  )
}
