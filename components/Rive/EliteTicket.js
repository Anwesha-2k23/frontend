import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import styles from './style.module.css'

export default function Displayrive() {
    const { rive, RiveComponent } = useRive({
        src: 'Entry pass cards.riv',
        artboard: 'Elite card.svg',
        autoplay: true,
    })

    return <RiveComponent className={styles.EliteCard} />
}
