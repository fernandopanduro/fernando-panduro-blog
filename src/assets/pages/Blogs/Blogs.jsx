import React from 'react';

import { Blog } from '../../components/blog';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CardPrimary from '../../components/CardPrimary/CardPrimary';

import styles from './Blogs.module.css';

function Blogs() {

  window.scrollTo(0,0)

  return (
    <div className={`${styles.blogs} container`}> 

      <Helmet>
        <title>Blogs | Fernando Panduro</title>
        <meta name='description' content='Portafolio' />
      </Helmet>

      <h2 className={`${styles.title} text-center text-uppercase`}>Blogs</h2>

      {
        Blog.map(blog => (
        <Link to={blog.links}> 
          <CardPrimary imgJpg={blog.imgJpg} imgWebp={blog.imgWebp} imgAvif={blog.imgAvif} title={blog.title} description={blog.description} read={blog.read} posted={blog.posted}/> 
        </Link>
        ))
      }

    </div>
  )
}

export default Blogs