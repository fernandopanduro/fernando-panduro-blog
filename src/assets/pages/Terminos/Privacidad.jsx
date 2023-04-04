import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Terminos.module.css';

function Privacidad() {
  return (
    <div className='container'>  
      <Helmet>
        <title>🔐 Terminos de Privacidad | Fernando Panduro</title>
        <meta name="description" content="Terminos de Privacidad de Fernando Panduro" />
      </Helmet>
        <div className={`${styles.privacidad} flex`}>
            <h2 id='title'>Aviso de Privacidad</h2>
            <p>Su privacidad es importante para nosotros. Es política de Fernando Panduro respetar su privacidad respecto a cualquier información personal que podamos recolectar en el sitio web Fernando Panduro, y en los otros sitios que posemos y operamos.</p>
            <p>Solicitamos información personal solo cuando realmente la requerimos para prestar un servicio. Lo hacemos a través de medios justos y legales, bajo su conocimiento y consentimiento. También le informamos por qué la estamos recolectando y cómo será utilizada.</p>
            <p>Solo retenemos la información recolectada durante el tiempo que sea necesario para brindarle el servicio solicitado. Cuando recolectamos datos, los protegemos dentro de medios comercialmente aceptables, con el fin de evitar pérdidas y robos, así como el acceso, la divulgación, la copia, el uso o la modificación no autorizada.</p>
            <p>No compartimos públicamente ni con terceros su información de identificación personal, excepto cuando es legalmente exigido.</p>
            <p>Nuestra plataforma puede tener enlaces hacia sitios web externos que no son operados por nosotros. Le indicamos que no tenemos ningún tipo de control sobre el contenido ni las prácticas de esos sitios, y que no nos hacemos responsables por sus respectivos avisos de privacidad.</p>
            <p>Usted está en la libertad de rechazar nuestra solicitud de información personal, pero asimismo comprende que tal vez no le podremos prestar algunos de los servicios deseados.</p>
            <p>El uso continuo de nuestro sitio será considerado como aceptación de nuestras prácticas respecto a la privacidad y a la información personal.</p>
            <p>Si tiene alguna inquietud referente a la forma como administramos los datos de nuestros usuarios y la información personal, póngase en contacto con nosotros</p>
            <p>Compromisos del Usuario</p>
            <p>El usuario se compromete a hacer un uso adecuado de los contenidos y de la información que Fernando Panduro ofrece en el sitio y, con carácter indicativo, pero no limitado, a:</p>
            <ol>
                <li>A) No involucrarse en actividades ilegales o que sean contrarias a la buena fe y al orden público;</li>
                <li>B) No difundir contenidos ni publicidad de índole racista, xenofóbico, Privacy Policy Generator o azar, pornografía, terrorismo o que esté en contra de los derechos humanos;</li>
                <li>C) No causar daños a los sistemas físicos (hardware) y lógicos (software) de Fernando Panduro, de sus proveedores o terceros, para introducir o distribuir virus informáticos u otros sistemas de hardware o software que sean capaces de producir los perjuicios anteriormente mencionados.</li>
            </ol>
            <p>Más información</p>
            <p>Esperamos que esta información sea clara. Y como mencionado anteriormente: cuando no tenga seguridad de que necesita las cookies, es más seguro permitirlas, en caso de que esté interactuando con uno de los recursos que utiliza en nuestro sitio web.</p>
            <p>Esta política es efectiva a partir de 14 February 2023 11:40.</p>
        </div>
    </div>
  )
}

export default Privacidad