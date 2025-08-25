import Styles from "./styles.module.css"

import { Badge } from "../badge"
import { ElementType, InputHTMLAttributes, useState } from "react"

interface RangeProps extends InputHTMLAttributes<HTMLInputElement> {
    defaultValue: number
    Icon?: ElementType
    name?: string
    title?: string 
}

export const Range = ({ defaultValue, Icon, title, name, ...rest }: RangeProps) => {
    const [value, setValue] = useState(defaultValue)
    
    return (
        <label htmlFor={name} className={Styles.container}>
            <div className={Styles.header}>
                {Icon && <Icon/>}
                <p>{title}</p>
            </div>

            <div className={Styles.content}>
                <input type="range" 
                    onChange={(e) => setValue(Number(e.target.value))}
                    {...rest}
                />

                <Badge 
                    type="aura"
                    value={value}
                />
            </div>
        </label>
    )
}