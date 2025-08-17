import { useRef } from "react"

export const useScrollNavigation = (move: number) => {
    const scrollRef = useRef<HTMLDivElement | null>(null)
    
    const moveLeft = () => {
        if(scrollRef.current) scrollRef.current.scrollLeft -= move
    }

    const moveRight = () => {
        if(scrollRef.current) scrollRef.current.scrollLeft += move
    }

    return {
        scrollRef,
        moveLeft,
        moveRight
    }
}