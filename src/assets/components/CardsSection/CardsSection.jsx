import React from 'react'

import styles  from './CardsSection.module.css';
import CardPrimary from '../CardPrimary/CardPrimary';
import { Link } from 'react-router-dom';
import { Blog } from '../blog';


function CardsSection({heading, link}) {
  return (
    <div className={`${styles.cardsSection} flex container`}>
      <h3 className={`${styles.title} text-uppercase`}>{heading}</h3>
      
      <div className={styles.gridBlog}>
        {
          Blog.slice(0, 3).map((blog, index) => ( 
          <Link key={index} className={styles.link} to={blog.links}> 
            <CardPrimary  imgAvif={blog.imgAvif} imgJpg={blog.imgJpg} imgWebp={blog.imgWebp}  title={blog.title} description={blog.description} read={blog.read} posted={blog.posted} />
          </Link>
          ))
        }
      </div>


      <button type="button" className={`btn btn-dark `}><Link to={link} className={`${styles.btn}`}>Ver Mas</Link></button>
    </div>
  )
}

export default CardsSection