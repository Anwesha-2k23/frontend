import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

export default function Displayrive() {
    const { rive, RiveComponent } = useRive({
        src: 'Anwesha animations.riv',
        artboard: 'Anwesha.svg',
        stateMachines: 'Anwesha State Machine',
        animations: ['A', 'N', 'W', 'E', 'S', 'H', 'A2'],
        autoplay: true,
    })
    const onHoverInput = useStateMachineInput(
        rive,
        'Anwesha State Machine',
        'Hover on N'
    )

    return (
        <RiveComponent
            onMouseOver={() => onHoverInput && onHoverInput.fire()}
            style={{
                position: 'absolute',
                width: '100%',
                height: '25%',
                minWidth: '300px',
                transform: 'translateY(50px)',
            }}
        />
    )
}
