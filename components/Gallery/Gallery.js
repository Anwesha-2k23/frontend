import style from './Gallery.module.css'
const Gallery = (props) => {
  return (
    <div className={style.event}>
      <h1>{props.eventName}</h1>
      <p className={style.description}>{props.desc}</p>
      <div className={style.gallery}>
    <figure className={`${style.galleryItem} ${style.galleryItem1}`}>
      <div className={style.galleryImg}>
      <img src={`${props.image1}`} className={style.galleryImg} alt="Image 1"></img>
      </div>
    </figure>
    <figure className={`${style.galleryItem} ${style.galleryItem2}`}>
        <div className={style.galleryImg}>
      <img src={`${props.image2}`} className={style.galleryImg} alt="Image 2"></img>
        </div>
    </figure>
    <figure className={`${style.galleryItem} ${style.galleryItem3}`}>
            <div className={style.galleryImg}>
      <img src={`${props.image3}`} className={style.galleryImg} alt="Image 3"></img>

            </div>
    </figure>
    <figure className={`${style.galleryItem} ${style.galleryItem4}`}>
            <div className={style.galleryImg}>
      <img src={`${props.image4}`} className={style.galleryImg} alt="Image 4"></img>
            </div>
    </figure>
    <figure className={`${style.galleryItem} ${style.galleryItem5}`}>
            <div className={style.galleryImg}>
      <img src={`${props.image5}`} className={style.galleryImg} alt="Image 5"></img>
            </div>
    </figure>
    <figure className={`${style.galleryItem} ${style.galleryItem6}`}>
            <div className={style.galleryImg}>
      <img src={`${props.image6}`} className={style.galleryImg} alt="Image 6"></img>
            </div>
    </figure>
  </div>
    </div>
    
  )
}

export default Gallery