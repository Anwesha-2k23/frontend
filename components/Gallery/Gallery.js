import { useState, useCallback } from 'react'
import style from './Gallery.module.css'
import { useInView } from 'react-intersection-observer'
import ImageItem from './ImageItem'
import { useScrollDirection } from 'react-use-scroll-direction'
import ImageViewer from 'react-simple-image-viewer'
const Gallery = (props) => {
    const { ref: h1ref, inView: h1view } = useInView()
    const { ref: pref, inView: pview } = useInView()
    const { scrollDirection } = useScrollDirection()

    const [isViewerOpen, setIsViewerOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState(0)

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index)
        setIsViewerOpen(true)
    }, [])

    const closeImageViewer = () => {
        setCurrentImage(0)
        setIsViewerOpen(false)
    }

    const images = props.images
    return (
        <div className={style.gallery}>
            <h1 ref={h1ref}>{props.eventName}</h1>
            <p ref={pref}>{props.desc}</p>
            <div className={style.container}>
                {images.map((image, index) => {
                    return (
                        <ImageItem
                            image={image}
                            key={index}
                            idx={index}
                            clickFn={openImageViewer}
                        />
                    )
                })}

                {isViewerOpen && (
                    <ImageViewer
                        src={images}
                        currentIndex={currentImage}
                        disableScroll={false}
                        closeOnClickOutside={true}
                        onClose={closeImageViewer}
                    />
                )}
            </div>
        </div>
    )
}

export default Gallery
