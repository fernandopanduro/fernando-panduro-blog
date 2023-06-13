import React, { useEffect } from 'react';
import { CardProduct } from '../../components/CardProduct/CardProduct';

import styles from './Tienda.module.css';

export const Tienda = () => {

window.scrollTo(0,0)

/* const url = 'https://api.printful.com/stores';
const token = 'BV2u3Cjuv3KHdSUtvXptB24FQSMRRrBfxhHXLmPn'; */

/* useEffect(() => {
  fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
    }
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error en la solicitud');
    }
  })
  .then(data => {
    // Manejar la respuesta de la API
    console.log(data);
  })
  .catch(error => {
    // Manejar errores
    console.error(error);
  });
}, [url]) */



  return (
    <div className={`${styles.containerTienda} flex`}>
        <div className={`${styles.tienda} container`}>
            <h2 className='text-center'>Productos</h2>
            <div className={styles.cardsProducts}>
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </div>
        </div>
    </div>
  )
}
