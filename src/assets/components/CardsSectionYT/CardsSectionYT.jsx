import React from 'react'


import styles from './CardsSectionYT.module.css';

import CardSecondary from '../CardSecondary/CardSecondary';
import { useEffect, useState } from 'react';



function CardsSectionYT({heading, link}) {

/*   const key       = 'AIzaSyAXNO85FZ0akeWfZ5Qq-uD6Gkm_pD2Rp0w'; */
  const key       = process.env.REACT_APP_KEY_YOUTUBE;
  const idChannel = 'UC1100w5ZoAIw38flYh_nOYg';
  const url       = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${idChannel}&part=snippet,id&order=date&maxResults=5`
  const [videos, setVideos] = useState();
/*   const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [posted, setPosted] = useState('Publicado')
  const [links, setLinks] = useState()
  const [imgVideo, setImgVideo] = useState() */

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setVideos(data.items);
/*       setTitle(videos[0]?.snippet.title);
      setDescription(videos[0]?.snippet.description);
      setLinks(videos[0]?.id.videoId);
      setImgVideo(videos[0]?.snippet.thumbnails.medium.url);
      setPosted(videos[0]?.snippet.publishTime);
      console.log(videos) */
    })
  }, [url])
  

  

  return (
    <div className={`${styles.cardsSection} flex container`}>
      <h3 className={`${styles.title} text-uppercase`}>{heading}</h3>

      {/* {
        <a title='youtube' target='_blank' href={`https://www.youtube.com/watch?v=${links}`}><CardPrimary imgJpg={imgVideo} title={title} description={description} read='Reciente' posted={posted.slice(0, 10)} /></a>
      } */}
      
      {
        videos?.map((video, index) => (
        <a className={styles.link} key={index} title='youtube' target='_blank' rel='noreferrer' href={`https://www.youtube.com/watch?v=${video.id.videoId}`}> 
          <CardSecondary imgJpg={video.snippet.thumbnails.medium.url} title={video.snippet.title} read='Reciente' posted={(video.snippet.publishTime).slice(0, 10)}/> 
        </a>
        ))
      }


      <button type="button" className={`btn btn-dark`}><a title='Canal de youtube de fernando' target='_blank' rel='noreferrer' href='https://www.youtube.com/@fernandopanduro' className={`${styles.btn}`}>Ver Mas</a></button>
    </div>
  )
}


export default CardsSectionYT