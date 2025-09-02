import { useState } from "react"

const INITIAL = 1
const ZERO = 0
const HALF_DIVISION = 2
const START_SUB = 1

interface PaginationProps {
    max: number
    size: number
}

export const usePagination = ({ max, size }: PaginationProps) => {
    const [actual, setActual] = useState(INITIAL)
    
    const half = Math.floor(size / HALF_DIVISION);
    const start = Math.max(ZERO, Math.min(actual - START_SUB - half, max - size));

    const visibleItems = Array.from({ length: size }, (_, index) => start + index)
    
    return {
        actual,
        setActual,
        visibleItems
    }   
}