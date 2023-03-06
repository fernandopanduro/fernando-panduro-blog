import React from 'react';
import styles from './Terminos.module.css';
import { Helmet } from 'react-helmet';

function Servicio() {
  return (
    <div className='container'>  

      <Helmet>
          <title>🛠️ Terminos de Servicio | Fernando Panduro</title>
          <meta name="description" content="Terminos de servicio de Fernando Panduro" />
      </Helmet>

        <div className={`${styles.privacidad} flex`}>
            <h2>Términos de servicio</h2>
            <p>¡Bienvenido a Fernando Panduro!</p>
            <p>Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de Fernando Panduro Inc, ubicado en https://ferpanduro.com.</p>
            <p>Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones. No continúes usando Fernando Panduro si no estás de acuerdo con todos los términos y condiciones establecidos en esta página.</p>
            <strong>Licencia:</strong>
            <p>A menos que se indique lo contrario, Fernando Panduro Inc y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en Fernando Panduro. Todos los derechos de propiedad intelectual son reservados. Puedes acceder desde Fernando Panduro para tu uso personal sujeto a las restricciones establecidas en estos términos y condiciones.</p>
            <p>No debes:</p>
            <ol>
              <li>Copiar o volver a publicar material de Fernando Panduro</li>
              <li>Vender, alquilar o sublicenciar material de Fernando Panduro</li>
              <li>Reproducir, duplicar o copiar material de Fernando Panduro</li>
              <li>Redistribuir contenido de Fernando Panduro</li>
            </ol>
            <p>Este acuerdo comenzará el fecha presente.</p>
            <p>Partes de este sitio web ofrecen a los usuarios la oportunidad de publicar e intercambiar opiniones e información en determinadas áreas. Fernando Panduro Inc no filtra, edita, publica ni revisa los comentarios antes de su presencia en el sitio web. Los comentarios no reflejan los puntos de vista ni las opiniones de Fernando Panduro Inc, sus agentes y/o afiliados. Los comentarios reflejan los puntos de vista y opiniones de la persona que publica. En la medida en que lo permitan las leyes aplicables, Fernando Panduro Inc no será responsable de los comentarios ni de ninguna responsabilidad, daños o gastos causados ​​o sufridos como resultado de cualquier uso o publicación o apariencia de comentarios en este sitio web.</p>
            <p>Fernando Panduro Inc se reserva el derecho de monitorear todos los comentarios y eliminar los que puedan considerarse inapropiados, ofensivos o que incumplan estos Términos y Condiciones.</p>
            <strong>Responsabilidad del contenido:</strong>
            <p>No seremos responsables de ningún contenido que aparezca en tu sitio web. Aceptas protegernos y defendernos contra todas las reclamaciones que se presenten en tu sitio web. Ningún enlace(s) debe aparecer en ningún sitio web que pueda interpretarse como difamatorio, obsceno o criminal, o que infrinja, de otra manera viole o defienda la infracción u otra violación de los derechos de terceros.</p>
            <strong>Reserva de derechos:</strong>
            <p>Nos reservamos el derecho de solicitar que elimines todos los enlaces o cualquier enlace en particular a nuestro sitio web. Apruebas eliminar de inmediato todos los enlaces a nuestro sitio web cuando se solicite. También nos reservamos el derecho de modificar estos términos y condiciones y su política de enlaces en cualquier momento. Al vincular continuamente a nuestro sitio web, aceptas estar vinculado y seguir estos términos y condiciones de vinculación.</p>
            <strong>Exención de responsabilidad:</strong>
            <p>En la medida máxima permitida por la ley aplicable, excluimos todas las representaciones, garantías y condiciones relacionadas con nuestro sitio web y el uso de este. Nada en este descargo de responsabilidad:</p>
            <ol>
                <li>Limitará o excluirá nuestra responsabilidad o la tuya por muerte o lesiones personales;</li>
                <li>Limitará o excluirá nuestra responsabilidad o la tuya por fraude o tergiversación fraudulenta;</li>
                <li>Limitará cualquiera de nuestras responsabilidades o las tuyas de cualquier manera que no esté permitida por la ley aplicable; o</li>
                <li>Excluirá cualquiera de nuestras responsabilidades o las tuyas que no puedan estar excluidas según la ley aplicable.</li>
            </ol>
            <p>Las limitaciones y prohibiciones de responsabilidad establecidas en esta sección y en otras partes de este descargo de responsabilidad: (a) están sujetas al párrafo anterior; y (b) regirá todas las responsabilidades que surjan en virtud de la exención de responsabilidad, incluidas las responsabilidades que surjan en el contrato, en agravio y por incumplimiento de la obligación legal.</p>
            <p>Siempre que el sitio web y la información y los servicios en el sitio se proporcionen de forma gratuita, no seremos responsables de ninguna pérdida o daño de cualquier naturaleza.</p>
        </div>
    </div>
  )
}

export default Servicio