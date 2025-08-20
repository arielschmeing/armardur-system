import Styles from "./styles.module.css"

import { ArrowIcon } from "../icons/arrow"
import { SelectHTMLAttributes } from "react"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    defaultOption: string
    options: string[]
    name: string
}

export const Select = ({ name, defaultOption, options, ...rest }: SelectProps) => {
    return (
        <div className={Styles.container}>
            <select name={name} id={name} {...rest} className={Styles.select}>
                <option
                    value={defaultOption}
                    selected
                    disabled
                >
                    {defaultOption}
                </option>
                {options.map(option => 
                    <option 
                        value={option} 
                        key={option} 
                    >
                        {option}
                    </option>
                )}
            </select>
            <ArrowIcon className={Styles.icon} />
        </div>
    )
}