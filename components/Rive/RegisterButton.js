import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import styles from './style.module.css'

export default function Displayrive() {
    const { rive, RiveComponent } = useRive({
        src: '/anwesha_24.riv',
        artboard: 'blue ribbon base',
        autoplay: true,
    })

    console.log(rive)
    return <RiveComponent className={styles.registerButton} />
}
