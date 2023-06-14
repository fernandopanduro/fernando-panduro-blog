import { Helmet } from 'react-helmet';
import Banner from '../../components/Banner/Banner';
import CardsSection from '../../components/CardsSection/CardsSection';
import CardsSectionYT from '../../components/CardsSectionYT/CardsSectionYT';
import Portfolio from '../../components/Portfolio/Portfolio';
import styles from './Home.module.css';
import CardMe from '../../components/CardMe/CardMe';
import { useState } from 'react';

const Preload = () => {
    return (
        <div className={styles.preload}>
            <div className={styles.threeBody}>
              <div className={styles.threeBody__dot}></div>
              <div className={styles.threeBody__dot}></div>
              <div className={styles.threeBody__dot}></div>
            </div>
        </div>
        
    )
}

export function Home() {

    const [ loading, setLoading ] = useState(true);

    if (loading) {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }

  window.scrollTo(0,0)
    return (
        <>
            {loading && <Preload />}
            <div className={styles.home}>
                <Helmet><title>Fernando Panduro</title></Helmet>
                <Banner />
                <div className={styles.hero}>
                    <CardMe />
                    <div className={styles.stars}></div>
                    <div className={styles.cactus}></div>
                </div>
                <CardsSection heading='Blog' link='/blogs'/>
                <Portfolio link='/portfolio'/>
                <CardsSectionYT heading='Youtube' />
            </div>
        </>
    )
}