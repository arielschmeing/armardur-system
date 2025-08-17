import Styles from "./styles.module.css"

import { TextareaHTMLAttributes } from "react"
import { TextAreaClass } from "./text-area-class.type"

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className: TextAreaClass
    name: string
}

export const TextArea = ({ className, name, ...rest }: TextAreaProps) => {
    return (
        <label htmlFor={name} className={Styles[className]}>
            <textarea name={name} {...rest} />
        </label>
    )
}