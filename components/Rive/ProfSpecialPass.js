import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import styles from './style.module.css'

export default function Displayrive() {
    const { rive, RiveComponent } = useRive({
        src: '/pronite/anwesha_24_maybe_final.riv',
        artboard: 'Fest Pass 749',
        autoplay: true,
    })

    return <RiveComponent className={styles.EliteCard} />
}
