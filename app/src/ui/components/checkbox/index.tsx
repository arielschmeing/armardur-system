import Styles from "./styles.module.css"

import { CheckboxClass } from "./checkbox-class.type"
import { InputHTMLAttributes } from "react"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    className: CheckboxClass
    name: string
    text: string
    type: "checkbox" | "radio"
}

export const Checkbox = ({ className, name, text, type, ...rest }: CheckboxProps) => {
    return (
        <label htmlFor={name} className={Styles[className]}>
            <input type={type} name={name} {...rest} />
            <span>{text}</span>
        </label>
    )
}