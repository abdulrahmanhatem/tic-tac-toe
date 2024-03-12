import { useRef } from 'react';
import background from "../assets/sounds/background.mp3";
import useSound from "../hooks/useSound";


export default function BackgroundMusic({isMute, volume}) {
    const backgroundRef = useRef();

    if (backgroundRef.current) {
        backgroundRef.current.volume = volume /100;
    }

    useSound(backgroundRef, isMute)

    return (
        <>
            <audio src={background} ref={backgroundRef} loop autoPlay controlsList='nodownload' controls></audio>
        </>
    )
}
