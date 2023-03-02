import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

export default function HomeBackgroundAnimation() {
    const { rive, RiveComponent } = useRive({
        src: '../public/Anwesha_animations.riv',
        // artboard: 'Anwesha.svg',
        // stateMachines: 'Anwesha State Machine',
        // animations: ['A', 'N', 'W', 'E', 'S', 'H', 'A2'],
        autoplay: false,
    })
    if (rive) {
        console.log(rive.contents)
    }
    // const onHoverInput = useStateMachineInput(
    //     rive,
    //     'Anwesha State Machine',
    //     'Hover on N'
    // )

    return <RiveComponent onHover={() => rive && rive.play()} />
}