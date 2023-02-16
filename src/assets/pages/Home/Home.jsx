import Banner from '../../components/Banner/Banner';
import CardsSection from '../../components/CardsSection/CardsSection';
import CardsSectionYT from '../../components/CardsSectionYT/CardsSectionYT';
import Portfolio from '../../components/Portfolio/Portfolio';
import styles from './Home.module.css';


export function Home() {
    return (
        <div className={styles.home}>
            <Banner />
            <CardsSection heading='Blog' link='/blogs'/>
            <Portfolio link='/portfolio'/>
            <CardsSectionYT heading='Youtube' link='/' />
        </div>
    )
}