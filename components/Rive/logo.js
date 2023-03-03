import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
function Logo() {
    const STATE_MACHINE_NAME = 'Basic State Machine'
    const INPUT_NAME = 'Switch'
    const { rive, RiveComponent } = useRive({
        src: '/navbar/hamburger-time.riv',
        autoplay: true,
        stateMachines: STATE_MACHINE_NAME,
    })
        const onClickInput = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME)
    return (
        <RiveComponent onClick={() => onClickInput.fire()} />
    )
}
export default Logo
