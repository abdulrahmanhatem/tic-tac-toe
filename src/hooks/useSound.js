import { useEffect } from 'react';

export default function useSound(ref, isMute) {
    useEffect(() => {
        if (ref.current) {
            addEventListener("click", () => {
                !isMute 
                ? ref.current.play()
                : ref.current.pause()
            })
        }
    }, [isMute])
}
