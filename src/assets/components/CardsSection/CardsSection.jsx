import React from 'react'

import styles  from './CardsSection.module.css';
import CardPrimary from '../CardPrimary/CardPrimary';
import CardSecondary from '../CardSecondary/CardSecondary';
import { Bar } from '../Bar/Bar';
import { Link } from 'react-router-dom';
import { Blog } from '../blog';


function CardsSection({heading, link}) {

  const {title, description, read, posted, links} = Blog[0];

  console.log(Blog)

  return (
    <div className={`${styles.cardsSection} flex container`}>
      <h3 className={`${styles.title} text-uppercase`}>{heading}</h3>
      <Link to={links}><CardPrimary title={title} description={description} read={read} posted={posted} /></Link>
      
      {
        Blog.map(blog => (
        <Link to={blog.links}> 
          <CardSecondary title={blog.title} read={blog.read} posted={blog.posted}/> 
        </Link>
        ))
      }


      <button type="button" className={`btn btn-dark `}><Link to={link} className={`${styles.btn}`}>Ver Mas</Link></button>
    </div>
  )
}

export default CardsSection