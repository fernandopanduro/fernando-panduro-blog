import Banner from '../../components/Banner/Banner'
import CardsSection from '../../components/CardsSection/CardsSection'
import styles from './Home.module.css'

export function Home() {
    return (
        <div className={styles.home}>
            <Banner />
            <CardsSection title='Blog'/>
            <CardsSection title='Youtube'/>
        </div>
    )
}