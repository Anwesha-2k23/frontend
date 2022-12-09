import {useEffect, useState} from 'react';
import style from './Gallery.module.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Gallery = (props) => {
  const images = props.images;
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])
  return (
    <div data-aos="fade-left" className={style.gallery}>
      <h1>{props.eventName}</h1>
      <p>{props.desc}</p>
      <div className={style.container}>
        {
          images.map((image, index) => {
            return (
              <div key={index} className={style.image_item}>
                <img src={`${image}`} className={style.image} alt="" />
              </div>
            )
          })}
      </div>
    </div>

  )
}

export default Gallery