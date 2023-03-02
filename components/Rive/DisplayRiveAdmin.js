import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

export default function Displayrive() {
    const { rive, RiveComponent } = useRive({
        src: "Anwesha animations.riv",
        artboard: 'Admin isle.png',
        stateMachines: "Anwesha Register component",
        autoplay: true,
    })
    const onHoverInput = useStateMachineInput(
        rive,
        'Anwesha Register component',
        'Hover on Register'
    )

    return <RiveComponent style={{
      position: 'absolute',
      top: '200px',
      height: '750px',
     
    }} />
}
