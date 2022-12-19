import style from './Gallery.module.css'
import { useInView } from 'react-intersection-observer'
import { useScrollDirection } from 'react-use-scroll-direction'
const Image = (props) => {
    const { ref: imgref, inView: imgview } = useInView()
    const { scrollDirection } = useScrollDirection()
    // console.log(scrollDirection === "DOWN");
    const { image } = props
    return (
        <div
            ref={imgref}
            className={`imageBox ${style.image_item} ${
                scrollDirection !== 'UP'
                    ? imgview
                        ? style.show
                        : style.hidden
                    : ''
            }`}
        >
            {/* <div ref={imgref} className={`${style.image_item} ${(imgview) ? style.show : style.hidden}`}> */}
            <img src={`${image}`} className={style.image} />
        </div>
    )
}

export default Image
