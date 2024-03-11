import { useState, useEffect, useRef } from 'react';
import background from "../assets/sounds/background.mp3";

export default function Sound() {
    return (
        <>
            <BackgroundMusic/>
        </>
    )
}

export function BackgroundMusic() {
    const backgroundRef = useRef();
    const [isMute, setIsMute] = useState(true);

    useEffect(() => {
        addEventListener("click", () => {
            backgroundRef.current.play();
        })
       
    })
    return (
        <>
            <audio src={background} ref={backgroundRef} loop autoPlay></audio>
        </>
    )
}
