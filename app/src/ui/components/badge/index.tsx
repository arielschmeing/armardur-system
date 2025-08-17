import { BadgeClass } from "./badge-class.type"
import Styles from "./styles.module.css"

interface BadgeProps {
    value: string | number
    type: BadgeClass
}

export const Badge = ({ value, type }: BadgeProps) => {
    return <p className={`${Styles.generic} ${Styles[type]}`}>{value}</p>
}