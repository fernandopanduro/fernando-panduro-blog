import { Helmet } from 'react-helmet'
import { Bar } from '../../components/Bar/Bar'
import styles from './Blogs.module.css'

function SuperarAdicciones() {
  return (
    <div className={`${styles.containerBlogs} flex container`}>

        <Helmet>
          <title>¡Libérate de las adicciones y abraza la libertad! | Fernando Panduro</title>
          <meta name='description' content='¿Alguna vez te has preguntado cómo escapar de las garras de una adicción? ¡No te preocupes, estás en el lugar correcto! Aquí te presentamos algunos consejos entretenidos para dejar atrás esos hábitos destructivos y decirle adiós a las adicciones.' />
        </Helmet>

        <div className={`${styles.blogs} flex`}>
          <h2 className='text-center'>¡Libérate de las adicciones y abraza la libertad!</h2>
          <Bar />

          <p>¿Alguna vez te has preguntado cómo escapar de las garras de una adicción? ¡No te preocupes, estás en el lugar correcto! Aquí te presentamos algunos consejos entretenidos para dejar atrás esos hábitos destructivos y decirle adiós a las adicciones.</p>
          <p>¡No te pierdas de nada al dejar la adicción!</p>
          <p>¿Recuerdas esa sensación de no poder disfrutar de nada si no tenías tu adicción cerca? Bueno, ¡olvídalo! Al liberarte de esa dependencia, todas las conexiones neuronales asociadas a la dopamina se desvanecerán gradualmente. Serás libre y podrás disfrutar de la vida sin ataduras.</p>
          <p>No envidies a los adictos. Ellos se vuelven cada día más miserables, mientras tú te vuelves cada día más libre. ¡Ten pena por ellos! Después de todo, ¡necesitan tu pena para darse cuenta de lo que están perdiendo!</p>
          <h3 className='text-left'>La manera fácil de parar.</h3>
          <p>Sigue estos divertidos pasos y descubrirás que dejar tu adicción puede ser tan fácil como disfrutable:</p>
          <ul>
            <li className={styles.listItem}>Toma la decisión de no volver nunca más a tu adicción. ¡Adiós a los malos hábitos!</li>
            <li className={styles.listItem}>¡Alégrate, porque ya eres libre! Despídete de esa adicción dañina y dale la bienvenida a una vida sin cadena</li>
            <li className={styles.listItem}>¿Dolores de abstinencia? ¡Eso es solo una ilusión! Muchas veces, los dolores son más mentales que físicos. La duda y la falta de certeza crean esas molestias. Así que, mantén la convicción de que estás haciendo lo correcto y los dolores desaparecerán como por arte de magia.</li>
          </ul>
          <h3 className='text-left'>Las instrucciones para liberarte de tu adiccion:</h3>
          <ul>
            <li>Sigue todas las instrucciones.</li>
            <li>Mantén una mente abierta.</li>
            <li> Resiste cualquier ‘dosis temporal’. No existen las ocasiones especiales.</li>
            <li> Hazlo claro en tu mente: la adiccion no te proporciona nada, no es un placer ni un apoyo, y al dejarlo no estás haciendo un sacrificio. No hay nada a lo que renunciar y no hay razón por la que debas sentirte privado.</li>
            <li>¡No esperes a poder dejarlo, hazlo ahora!</li>
            <li>Toma la decisión de que nunca volverás a tu adicción y nunca cuestiones dicha decisión.</li>
            <li>Recuerda que no existe tal cosa como ‘solo una miradita’. Las adicciones son una acción en cadena, y una cadena de por vida.</li>
            <li>No vuelvas a la adiccion, nunca más.</li>
          </ul>
          <h3 className='text-left'>La abstinencia: el desafío de las primeras 3 semanas.</h3>
          <p>Durante este periodo, puedes encontrarte con momentos de tentación y deseo intenso. ¡No cedas! Sé fuerte y di "no" cada vez que sientas que tu adicción te llama. Recuerda que eres mucho más fuerte de lo que piensas y que puedes superar cualquier obstáculo en tu camino hacia la libertad.</p>
          <p>No intentes no pensar en tu adicción, ¡mejor celébralo!</p>
          <p>¿Tratas de no pensar en tu adicción y eso solo empeora las cosas? ¡Cambia de enfoque! Cuando esos pensamientos acechen tu mente, en lugar de evitarlos, abrázalos y diles: "¡Estupendo, soy libre!". Verás cómo eso cambia tu perspectiva y hace que el proceso de dejar tu adicción sea mucho más llevadero.</p>
          <p>En resumen, dejar una adicción puede ser un desafío, pero no tiene por qué ser un camino oscuro y deprimente. Aprovecha estos consejos divertidos y efectivos para liberarte de las garras de una adicción. Recuerda, cada día que te alejas de esa dependencia, te acercas más a la verdadera libertad y a una vida plena de experiencias emocionantes y sin ataduras.</p>
          <p>¡No esperes más, sé valiente y dile adiós a esa adicción que ha estado frenando tu potencial! La felicidad y la libertad te esperan al otro lado.</p>
          <p>Eso es todo. Sigue trabajando duro. Se proactivo y trata de cambiar el mundo que te rodea.</p>
          <p>Deja de consumir tanto.</p>
          <p>Haz ejercicio.</p>
          <p>Come sano.</p>
          <p>No sé.</p>
          <p>Fuck greys.</p>
          <p>Fuck Dracos.</p>
          <p>Fuck Nagas.</p>
          <p>Fuck Moloch.</p>
          <p><strong>Godspeed Nigga.</strong></p>
        </div>
    </div>
  )
}

export default SuperarAdicciones