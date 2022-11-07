import style from './Gallery.module.css'

const Gallery = () => {
  return (
    <div className={style.gallery}>
    <figure className={`${style.galleryItem} ${style.galleryItem1}`}>
      {/* <img src="img/image-1.jpg" className={style.galleryImg} alt="Image 1"></img> */}
      <div className={style.galleryImg}></div>
    </figure>
    <figure className={`${style.galleryItem} ${style.galleryItem2}`}>
      {/* <img src="img/image-2.jpg" className={style.galleryImg} alt="Image 2"></img> */}
            <div className={style.galleryImg}></div>
    </figure>
    <figure className={`${style.galleryItem} ${style.galleryItem3}`}>
      {/* <img src="img/image-3.jpg" className={style.galleryImg} alt="Image 3"></img> */}
            <div className={style.galleryImg}></div>
    </figure>
    <figure className={`${style.galleryItem} ${style.galleryItem4}`}>
      {/* <img src="img/image-4.jpg" className={style.galleryImg} alt="Image 4"></img> */}
            <div className={style.galleryImg}></div>
    </figure>
    <figure className={`${style.galleryItem} ${style.galleryItem5}`}>
      {/* <img src="img/image-5.jpg" className={style.galleryImg} alt="Image 5"></img> */}
            <div className={style.galleryImg}></div>
    </figure>
    <figure className={`${style.galleryItem} ${style.galleryItem6}`}>
      {/* <img src="img/image-6.jpg" className={style.galleryImg} alt="Image 6"></img> */}
            <div className={style.galleryImg}></div>
    </figure>
  </div>
  )
}

export default Gallery