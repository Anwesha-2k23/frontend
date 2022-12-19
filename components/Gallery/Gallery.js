import style from './Gallery.module.css'
import { useInView } from 'react-intersection-observer'
import ImageItem from './ImageItem'
import { useScrollDirection } from 'react-use-scroll-direction'
import ImgsViewer from 'react-images-viewer'
import { useEffect, useState } from 'react'
const Gallery = (props) => {
    const { ref: h1ref, inView: h1view } = useInView()
    const { ref: pref, inView: pview } = useInView()
    const { scrollDirection } = useScrollDirection()
    const [imgViewer, setImgViewer] = useState(false)
    const [imgCount, setImgCount] = useState(0)
    const [images, setImages] = useState([])

    useEffect(() => {
        setImages(props.images)
    }, [])

    useEffect(()=>{
        Array.from(document.getElementsByClassName('imageBox')).forEach(
            (img, index) => {
                img.addEventListener('click', () => {
                    setImgCount(index)
                    setImgViewer(true)
                })
            }
        )
    },[images])

    return (
        <div className={style.gallery}>
            <h1
                ref={h1ref}
                className={`${
                    scrollDirection !== 'UP'
                        ? h1view
                            ? style.show
                            : style.hidden
                        : ''
                }`}
            >
                {props.eventName}
            </h1>
            <p
                ref={pref}
                className={`${
                    scrollDirection !== 'UP'
                        ? pview
                            ? style.show
                            : style.hidden
                        : ''
                }`}
                style={{
                    marginTop: '30px',
                    marginBottom: '30px',
                    fontWeight: '400',
                }}
            >
                {props.desc}
            </p>
            <div className={style.container}>
                {images.map((image, index) => {
                    return <ImageItem image={image.src} key={index} />
                })}
            </div>
            {/* trying to make a image viewer to view full image */}
            <ImgsViewer
            style={{overflow: 'hidden'}}
                backdropCloseable
                showCloseBtn={false}
                imgs={images}
                currImg={imgCount}
                isOpen={imgViewer}
                onClickPrev={() =>
                    setImgCount(imgCount > 0 ? imgCount - 1 : imgCount)
                }
                onClickNext={() =>
                    setImgCount(
                        imgCount < images.length - 1 ? imgCount + 1 : imgCount
                    )
                }
                onClose={() => setImgViewer(false)}
            />
        </div>
    )
}

export default Gallery
