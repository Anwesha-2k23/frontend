import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

export default function Displayrive({styling}) {
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

    return <RiveComponent style={styling} />
}
