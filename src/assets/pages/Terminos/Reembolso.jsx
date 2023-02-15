import React from 'react';
import styles from './Terminos.module.css';

function Reembolso() {
  return (
    <div className='container'>  
        <div className={`${styles.privacidad} flex`}>
            <h2>Política de devoluciones y reembolsos:</h2>
            <p>Tienes derecho a cancelar tu pedido dentro de los 30 días sin dar ninguna razón para hacerlo.</p>
            <p>El plazo para anular un pedido es de 30 días a partir de la fecha en que recibiste la mercancía o en el que un tercero que hayas designado, que no sea el transportista, tome posesión del producto entregado.</p>
            <p>Para ejercer tu derecho de cancelación, debes informarnos de tu decisión mediante una declaración clara.</p>
            <p>Puedes informarnos por el correo electrónico contacto@ferpanduro.com</p>
            <p>Te reembolsaremos a más tardar en 30 días a partir del día en que recibamos los bienes devueltos. Usaremos el mismo medio de pago que utilizaste para el pedido y no incurrirás en ningún cargo por dicho reembolso.</p>
            <strong>Condiciones para devoluciones:</strong>
            <ol>
                <li>Se compraron en los últimos 30 días.</li>
                <li>Están en el embalaje original.</li>
            </ol>
            <p>Los siguientes bienes no se pueden devolver:</p>
            <ol>
                <li>El suministro de bienes hecho según tus especificaciones o claramente personalizado.</li>
                <li>El suministro de bienes que por su naturaleza no son aptos para ser devueltos, por ejemplo bienes que se deterioran rápidamente o cuya fecha de caducidad ha terminado.</li>
                <li>El suministro de bienes que no son aptos para devolución por razones de protección de la salud o higiene y que se abrieron después de la entrega.</li>
                <li>El suministro de bienes que, después de la entrega, según su naturaleza, se mezclan inseparablemente con otros artículos.</li>
            </ol>
            <p>Nos reservamos el derecho de rechazar devoluciones de cualquier mercancía que no cumpla con las condiciones de devolución anteriores a nuestro exclusivo criterio.</p>
            <strong>Devolución de bienes</strong>
            <p>Eres responsable del costo y riesgo de devolvernos los bienes. Debes enviar los productos a la siguiente dirección:</p>
            <p>Mazatlan, Sinaloa</p>
            <p>No nos hacemos responsables de los bienes dañados o perdidos en el envío de devolución. Por lo tanto, recomendamos un servicio de correo asegurado y rastreable. No podemos emitir un reembolso sin la recepción real de los bienes o la prueba de la devolución recibida.</p>
            <strong>Regalos:</strong>
            <p>Si los productos se marcaron como regalo cuando se compraron y luego te los enviaron directamente, recibirás un crédito de regalo por el valor de tu devolución. Una vez que se reciba el producto devuelto, se te enviará por correo un certificado de regalo.</p>
            <p>Si los productos no se marcaron como regalo cuando se compraron, o si el obsequiador se envió el pedido a sí mismo para entregártelo luego, le enviaremos el reembolso al obsequiador.</p>
            <strong>Contáctanos</strong>
            <p>Si tienes alguna pregunta sobre nuestra Política de devoluciones y reembolsos, comunícate con nosotros por el correo electrónico contacto@ferpanduro.com</p>
        </div>
    </div>
  )
}

export default Reembolso