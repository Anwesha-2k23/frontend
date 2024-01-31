import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import styles from './style.module.css'

export default function Displayrive() {
    const { rive, RiveComponent } = useRive({
        src: '/pronite/anwesha_24_pronite_pass.riv',
        artboard: 'button register',
        autoplay: true,
    })

    console.log(rive)
    return <RiveComponent className={styles.registerButton} />
}
