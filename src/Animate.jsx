import { Player } from '@lottiefiles/react-lottie-player';
import animationData from './assets/Animation - 1746105665210.json';

export default function Animate() {
  return (
    <Player
      autoplay
      loop
      // src="src/assets/Animation - 1746105665210.json"
      src={animationData}
      style={{ height: '150px', width: '150px', marginBottom: '20px' }}
    />
  );
}
