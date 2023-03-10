import React from 'react';

import { Blog } from '../../components/blog';
import { Link } from 'react-router-dom';
import CardPrimary from '../../components/CardPrimary/CardPrimary';

import styles from './Blogs.module.css';

function Blogs() {
  return (
    <div className={`${styles.blogs} container`}> 

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