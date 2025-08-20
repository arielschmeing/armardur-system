import Styles from "./styles.module.css"

import { PropsWithChildren } from "react"

interface TextInputProps extends PropsWithChildren {
    title: string
}

export const AttributeInput = ({ children, title }: TextInputProps) => {
    return (
        <div className={Styles.container}>
            <p>{title}</p>
            {children}
        </div>
    )
}