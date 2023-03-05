import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import styles from './style.module.css'

export default function Displayrive() {
    const { rive, RiveComponent } = useRive({
        src: 'Events Eye.riv',
        artboard: 'events.svg',
        autoplay: true,
    })
    if(rive){
        console.log(rive.contents)
    }
    return <RiveComponent className={styles.eventsEye} />
}
