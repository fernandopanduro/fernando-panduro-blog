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
  const [videos, setVideos] = useState();
  const [title, setTitle] = useState('Titulo')
  const [description, setDescription] = useState('description')
  const [posted, setPosted] = useState('posted')
  const [links, setLinks] = useState('Links')
  const [imgVideo, setImgVideo] = useState('Img')

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setVideos(data.items);
      console.log(videos[0]?.snippet.thumbnails.medium.url);
      setTitle(videos[0]?.snippet.title);
      setDescription(videos[0]?.snippet.description);
      setLinks(videos[0]?.id.videoId);
      setImgVideo(videos[0]?.snippet.thumbnails.medium.url);
      setPosted(videos[0]?.snippet.publishTime);
    })
  }, [videos])
  




  return (
    <div className={`${styles.cardsSection} flex container`}>
      <h3 className={`${styles.title} text-uppercase`}>{heading}</h3>
      <a title='youtube' target='_blank' href={`https://www.youtube.com/watch?v=${links}`}><CardPrimary imgJpg={imgVideo} title={title} description={description} read='Reciente' posted={posted.slice(0, 10)} /></a>
      
      {
        videos?.map((video, index) => (
        <a key={index} title='youtube' target='_blank' href={`https://www.youtube.com/watch?v=${video.id.videoId}`}> 
          <CardSecondary imgJpg={video.snippet.thumbnails.default.url} title={video.snippet.title} read='Reciente' posted={(video.snippet.publishTime).slice(0, 10)}/> 
        </a>
        ))
      }


      <button type="button" className={`btn btn-dark`}><a title='Canal de youtube de fernando' target='_blank' href='https://www.youtube.com/@fernandopanduro' className={`${styles.btn}`}>Ver Mas</a></button>
    </div>
  )
}


export default CardsSectionYT