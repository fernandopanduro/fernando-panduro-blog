import React from 'react'

import styles  from './CardsSection.module.css';
import CardPrimary from '../CardPrimary/CardPrimary';
import CardSecondary from '../CardSecondary/CardSecondary';
import { Link } from 'react-router-dom';
import { Blog } from '../blog';


function CardsSection({heading, link}) {

  const {title, description, read, posted, links, imgAvif, imgJpg, imgWebp } = Blog[0];

  return (
    <div className={`${styles.cardsSection} flex container`}>
      <h3 className={`${styles.title} text-uppercase`}>{heading}</h3>
      <Link to={links}><CardPrimary  imgAvif={imgAvif} imgJpg={imgJpg} imgWebp={imgWebp}  title={title} description={description} read={read} posted={posted} /></Link>
      
      {
        Blog.map((blog, index) => (
        <Link key={index} className={styles.link} to={blog.links}> 
          <CardSecondary  imgJpg={blog.imgJpg} imgAvif={blog.imgAvif} imgWebp={blog.imgWebp} title={blog.title} read={blog.read} posted={blog.posted}/> 
        </Link>
        ))
      }


      <button type="button" className={`btn btn-dark `}><Link to={link} className={`${styles.btn}`}>Ver Mas</Link></button>
    </div>
  )
}

export default CardsSection