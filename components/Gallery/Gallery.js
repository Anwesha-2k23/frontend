import style from './Gallery.module.css'
import { useInView } from 'react-intersection-observer';
import ImageItem from './ImageItem';
import { useScrollDirection } from 'react-use-scroll-direction'
const Gallery = (props) => {
  const { ref: h1ref, inView: h1view } = useInView();
  const { ref: pref, inView: pview } = useInView();
  const {
    scrollDirection,
  } = useScrollDirection()
  // console.log(scrollDirection === "DOWN");
  const images = props.images;
  return (
    <div className={style.gallery}>
      <h1 ref={h1ref} >{props.eventName}</h1>
      <p ref={pref} >{props.desc}</p>
      <div className={style.container}>
        {
          images.map((image, index) => {
            return (
              <ImageItem image={image} key={index} />
            )
          })}
      </div>
    </div >
  )
}

export default Gallery
