import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

function FadeInWhenVisible({ inView, children }) {
    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'tween',
                    duration: 0.8,
                },
            })
        } else {
            animation.start({
                x: '+40vw',
            })
        }
    }, [inView])

    return (
        <motion.div animate={animation}>
            {children}
        </motion.div>
    )
}

export default FadeInWhenVisible
