import { useState } from 'react'
import style from './Gallery.module.css'
import { useInView } from 'react-intersection-observer'
import { useScrollDirection } from 'react-use-scroll-direction'
const Image = (props) => {
    const { ref: imgref, inView: imgview } = useInView()
    const { scrollDirection } = useScrollDirection()
    const { image } = props
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div
            ref={imgref}
            className={`${style.image_item} ${scrollDirection !== 'UP'
                ? imgview
                    ? style.show
                    : style.hidden
                : ''
                }`}
        >
            {/* <div ref={imgref} className={`${style.image_item} ${(imgview) ? style.show : style.hidden}`}> */}
            {!isLoaded && <img className={style.placeholder} src="/placeholder.png" alt="Placeholder" />}
            <img
                src={`${image}`}
                className={style.image}
                onClick={() => props.clickFn(props.idx)}
                style={{ display: isLoaded ? 'block' : 'none', cursor: 'pointer' }}
                onLoad={() => setIsLoaded(true)}
            />
        </div>
    )
}

export default Image
