import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

export default function Displayrive({ riveUrl }) {
    const { rive, RiveComponent } = useRive({
        src: riveUrl,
        artboard: 'Anwesha.svg',
        // stateMachines: "Anwesha State Machine",
        animations:['A','N','W','E','S','H','A2'],
        autoplay: true,
    })
    if(rive){
    console.log(rive.contents)
}
    // const onHoverInput = useStateMachineInput(rive, 'Anwesha State Machine', 'Hover on N')



    return (
        // <RiveComponent
        //     onClick={()=> onHoverInput.fire()}
        // />
        <RiveComponent 
            onMouseEnter={()=> rive && rive.play()}
            onMouseLeave={()=> rive && rive.stop()}
        />
    )
}
