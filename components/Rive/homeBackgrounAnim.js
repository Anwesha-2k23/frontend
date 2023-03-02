import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

export default function HomeBackgroundAnimation({
    riveUrl,
    artboardName,
    styling,
}) {
    const { rive, RiveComponent } = useRive({
        src: riveUrl,
        artboard: artboardName,
        // stateMachines: 'Anwesha State Machine',
        // animations: ['A', 'N', 'W', 'E', 'S', 'H', 'A2'],
        autoplay: true,
    })
    if (rive) {
        console.log(rive.contents)
    }
    // const onHoverInput = useStateMachineInput(
    //     rive,
    //     'Anwesha State Machine',
    //     'Hover on N'
    // )

    return <RiveComponent style={styling} onHover={() => rive && rive.play()} />
}
