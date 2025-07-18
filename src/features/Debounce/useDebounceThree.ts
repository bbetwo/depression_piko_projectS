import { useEffect, useState } from "react"


export const useDebounceThree = (val:string,delay:number) => {
    const [text, setText] = useState<string>(val)


    useEffect(()=>{
        const timer = setTimeout(() => {
            setText(val)
        }, delay);

        return () => clearTimeout(timer)
    })

    return {text}
}