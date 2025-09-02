import Styles from "./styles.module.css"

import { Button } from "../button"
import { usePagination } from "../../../hooks/use-pagination.hook"

interface PaginationProps {
    max: number
}

export const Pagination = ({ max }: PaginationProps) => {
    const { actual, setActual, visibleItems } = usePagination({ max, size: 5 })

    return (
        <div className={Styles.container}>
            <Button 
                disabled={actual === 1}
                className="action_button"
                text="<"
                onClick={() => setActual(prev => Math.max(prev - 1, 1))}
            />
            <div className={Styles.content}>
            {visibleItems.map(value => 
                <p 
                    id={`${actual === value + 1 && Styles.select}`} 
                    onClick={() => setActual(value + 1)}
                    key={value}
                >{value + 1}</p>
            )}
            </div>
            <Button
                disabled={actual === max}
                className="action_button"
                text=">"
                onClick={() => setActual(prev => Math.min(prev + 1, max))}
            />
        </div>
    )
}