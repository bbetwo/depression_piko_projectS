import { useEffect, useState } from "react"


export const useDebounce = (value:string, delay:number) => {
    const [quare, setQuare] = useState<string>(value)
   console.log(value,'sss');
   
    
    useEffect(()=> {
        const timer = setTimeout(() => {
             console.log('mont');
            setQuare(value);
        }, delay);

        return () => clearTimeout(timer)
    },[value, delay])

    return quare
}