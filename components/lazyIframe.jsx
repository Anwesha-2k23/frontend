import styles from '../styles/metaverse.module.css'

const lazyIframe = () => {
    return <iframe src="/IITP1/index.html" className={styles.metaverse_frame} />
}

export default lazyIframe
