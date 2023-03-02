import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import styles from './style.module.css';

export default function Displayrive() {
    const { rive, RiveComponent } = useRive({
        src: "Anwesha animations.riv",
        artboard: 'Gymkhana',
        autoplay: true,
    })

    return <RiveComponent className={styles.gymkhanaRive} />
}
