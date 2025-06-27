import { useEffect, useState } from "react"

export const useLocalStorage = (key:string, initialState:number) => {
    const [value, setValue]= useState<number>(()=>{
        const stora = localStorage.getItem(key)
        return stora ? JSON.parse(stora): initialState
    })

    useEffect(()=>{
       localStorage.setItem(key, JSON.stringify(value))
    },[key,value])

    return [value, setValue] as const;

}