import Rive from 'rive-react';
import { useRive } from '@rive-app/react-canvas';
// import assetRive from './rive_emoji_pack.riv'
// State Machine require the useRive hook.
function Logo() {
    // const { rive, RiveComponent } = useRive({
    //     src: '../rive_emoji_pack.riv',
    //     // autoplay: true,
    //     });
    
      return (
        <Rive
        src='hamburger_time.riv'
        //   onMouseEnter={() => rive && rive.play()}
        //   onMouseLeave={() => rive && rive.pause()}
        />
      );
}

export default Logo;