import Styles from "./styles.module.css"

import { InputClass } from "./input-class.type"
import { InputHTMLAttributes, ReactNode } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
    className: InputClass,
    children?: ReactNode,
    name: string,
}

export const Input = ({ children, className, name, ...rest }: InputProps) => {
    return (
        <label className={Styles[className]}  htmlFor={name}>
            <input name={name} {...rest} />
            {children}
        </label>
    )
}