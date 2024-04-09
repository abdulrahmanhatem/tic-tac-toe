import {background, x, o, win, draw, buzz} from "../assets/sounds";

export default function useSound(type, volume=50, isMute) {
    let sound;
    switch (type) {
        case "win":
            sound = win;
            break;
        case "draw":
            sound = draw;
            break;
        case "o":
            sound = o;
            break;
        case "x":
            sound = x;
            break;
        case "buzz":
            sound = buzz;
            break;
        default:
            break;
    }
    if (sound) {
        if (!isMute) {
            const audioObj = new Audio(sound);
            if (volume) {
                audioObj.volume = volume / 100;
            }
            
            audioObj.play().catch(e => console.log("No Interact"))
        }
    }
}
