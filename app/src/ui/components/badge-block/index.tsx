import Styles from "./styles.module.css"

import { ElementType } from "react"
import { BadgeBlockClass } from "./badge-block-class.type"

interface BadgeBlockProps {
    className?: BadgeBlockClass
    title: string
    content: string | number
    Icon?: ElementType
    subContent?: string | number
}

export const BadgeBlock = ({ Icon, content, title, className, subContent }: BadgeBlockProps) => {
    return (
        <div className={`${Styles.container} ${className ? Styles[className] : ""}`}>
            <div className={Styles.header}>
                {Icon && <Icon />}
                <p>{title}</p>
            </div>

            <div className={Styles.content}>
                <p>{content}</p>
                {subContent !== undefined && <p>{subContent}</p>}
            </div>
        </div>
    )
}