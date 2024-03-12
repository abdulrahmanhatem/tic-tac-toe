import { useRef } from 'react';
import {background, win, tick, draw} from "../assets/sounds";

import useSound from "../hooks/useSound";


export function Sound({type, isMute, volume}) {
    let sound;
    let loop = false;
    const soundRef = useRef();
    
    switch (type) {
        case "background":
            sound = background;
            loop = true;
            break;
        case "win":
            sound = win;
            break;
        case "draw":
            sound = draw;
            break;
        case "tick":
            sound = tick;
            break;

        default:
            sound = tick;
            break;
    }

    if (soundRef.current) {
        soundRef.current.volume = volume /100;
    }

    useSound(soundRef, isMute)

    return (
        <>
            <audio src={sound} ref={soundRef} loop={loop} autoPlay controlsList='nodownload' controls></audio>
        </>
    )
}