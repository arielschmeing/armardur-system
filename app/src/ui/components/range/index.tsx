import Styles from "./styles.module.css"

import { ElementType, InputHTMLAttributes, ReactNode } from "react"

interface RangeProps extends InputHTMLAttributes<HTMLInputElement> {
    defaultValue: number
    Icon?: ElementType
    name?: string
    title?: string
    children?: ReactNode
}

export const Range = ({ defaultValue, Icon, title, name, children, ...rest }: RangeProps) => {
    return (
        <label htmlFor={name} className={Styles.container}>
            <div className={Styles.header}>
                {Icon && <Icon/>}
                <p>{title}</p>
            </div>

            <div className={Styles.content}>
                <input type="range"
                    {...rest}
                />

                {children}
            </div>
        </label>
    )
}