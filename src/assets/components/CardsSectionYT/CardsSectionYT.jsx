import React from 'react'


import styles from './CardsSectionYT.module.css';

import CardPrimary from '../CardPrimary/CardPrimary';
import CardSecondary from '../CardSecondary/CardSecondary';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Blog } from '../blog';



function CardsSectionYT({heading, link}) {

  const key       = 'AIzaSyAXNO85FZ0akeWfZ5Qq-uD6Gkm_pD2Rp0w';
  const idChannel = 'UC1100w5ZoAIw38flYh_nOYg';
  const url       = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${idChannel}&part=snippet,id&order=date&maxResults=5`
  const [todos, setTodos] = useState();

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
  }, [])

  const {title, description, read, posted, links} = Blog[0];

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


      <button type="button" className={`btn btn-dark`}><Link to={link} className={`${styles.btn}`}>Ver Mas</Link></button>
    </div>
  )
}

export default CardsSectionYT