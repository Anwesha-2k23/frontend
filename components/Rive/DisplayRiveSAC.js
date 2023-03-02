import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import styles from './style.module.css';

export default function Displayrive() {
    const { rive, RiveComponent } = useRive({
        src: "Anwesha animations.riv",
        artboard: 'SAC',
        autoplay: true,
    })

    return <RiveComponent className={styles.SACRive} />
}
