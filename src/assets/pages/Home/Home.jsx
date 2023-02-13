import Banner from '../../components/Banner/Banner'
import styles from './Home.module.css'

export function Home() {
    return (
        <div className={styles.home}>
            <Banner />
        </div>
    )
}