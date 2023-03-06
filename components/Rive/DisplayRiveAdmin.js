import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import styles from './style.module.css'

export default function Displayrive() {
    const { rive, RiveComponent } = useRive({
        src: 'Anwesha animations.riv',
        artboard: 'Admin isle.png',
        stateMachines: 'Anwesha Register component',
        autoplay: true,
    })
    const onHoverInput = useStateMachineInput(
        rive,
        'Anwesha Register component',
        'Hover on Register'
    )
    if (rive) {
        console.log(rive.content)
    }

    return <RiveComponent className={styles.adminRive} />
}
