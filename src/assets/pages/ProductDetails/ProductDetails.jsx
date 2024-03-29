import React from 'react';

import styles from './ProductDetails.module.css';
import img from '../../pictures/img/img.jpg';   
import { Bar } from '../../components/Bar/Bar';
import {CardProduct} from '../../components/CardProduct/CardProduct';

import {IoPricetags} from 'react-icons/io5';
import {FaEye} from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi'

import visa from '../../pictures/img/visa.png';
import amex from '../../pictures/img/amex.png';
import paypal from '../../pictures/img/paypal.png';
import masterCard from '../../pictures/img/master-card.png';
import Share from '../../components/Share/Share';

export const ProductDetails = () => {

    window.scrollTo(0,0)

    const numeroVendidos = Math.floor(Math.random() * (15 - 5) + 5)
    const numeroVistas = Math.floor(Math.random() * (25 - 15) + 15)

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

            <div className={`${styles.details} flex`}>
                <h2 className={`${styles.title}`}>Producto perron de Fernando</h2>

                <span className={`${styles.price} text-left`}>$ 350.00 MXN</span>

                <Bar />

                <div className={`${styles.box} rounded`}>
                    <span> <IoPricetags size={20} /> <strong>{numeroVendidos} vendidos</strong> en las ultimas 48 horas</span>
                </div>

                <div className={`${styles.talla}`}>
                    <span>Talla:</span>
                    <select className={`${styles.tallas} rounded`} name="Tallas" id="tallas">
                        <option value="-- SELECCIONA --">-- SELECCIONA --</option>
                        <option value="CH">CH</option>
                        <option value="M">M</option>
                        <option value="X">X</option>
                    </select>
                </div>

                {/* <div className={`${styles.cantidad}`}>
                    <span>Cantidad:</span>
                    <div className={`${styles.cantidadContainer}`}>
                        <span className={`${styles.cantidadItem}`}>-</span>
                        <span className={`${styles.cantidadItem} ${styles.cantidadItemNumber}`}>1</span>
                        <span className={`${styles.cantidadItem}`}>+</span>
                    </div>
                </div> */}

                <button className={`${styles.btn} rounded`}><BiShoppingBag size={21} /> Agregar al carrito</button>

                <div className={`${styles.box} ${styles.pagosTarjeta} rounded`}>
                    <ul className={`${styles.pagos}`}>
                        <li><img loading='lazy' width='32' height='32' src={visa} alt="Pago con Visa" /></li>
                        <li><img loading='lazy' width='32' height='32' src={amex} alt="Pago con Amex" /></li>
                        <li><img loading='lazy' width='32' height='32' src={masterCard} alt="Pago con Master Card" /></li>
                        <li><img loading='lazy' width='32' height='32' src={paypal} alt="Pago con Paypal" /></li>
                    </ul>
                    <span>Pago Seguro Garantizado</span>
                </div>

                <div className={`${styles.box} rounded`}>
                    <span> <FaEye size={20} /> <strong>{numeroVistas} personas</strong> estan viendo este producto</span>
                </div>

                <Share />

                <Bar />


            </div>
        </div>

        <div className='container'>

            <p>Descripcion:</p>

            <p>La playera es unisex, 100% algodón, cuello redondo, corte regular y estampado gráfico por delante de la tienda.</p>
            <p>- Tu compra e informacion es 100% segura.</p>
            <p>- Envíos a todo México.</p>
            <p>- Paga en OXXO, Paypal, tarjeta de debito.</p>

        </div>

        <div className='container'>

            <h3 className='text-center text-uppercase'>Te Podria Interesar...</h3>

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
