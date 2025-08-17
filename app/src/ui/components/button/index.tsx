import Styles from "./styles.module.css"

import { ButtonClass } from "./button-class.type"
import { ButtonHTMLAttributes, PropsWithChildren } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
    className: ButtonClass,
    text: string,
    id?: string
}

export const Button = ({ className, text, children, id, ...rest }: ButtonProps) => {
    return (
        <button {...rest} id={Styles[id ? id : ""]} className={Styles[className]}>
            <p>{text}</p>
            {children}
        </button>
    )
}