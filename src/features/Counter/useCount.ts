import { useState } from "react"

export const useCount = (resetState = 0) => {
    const [count, setCount] = useState<number>(0)

    const plusCount = () => {
        setCount((prev) => prev + 1);
    }

    const minusCount = () => { 
        setCount((prev)=> prev - 1)
    }

    const resetCount = () => {
        setCount(resetState)
    }

    return {plusCount, minusCount, count, resetCount}
}