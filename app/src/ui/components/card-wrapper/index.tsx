import Styles from "./styles.module.css"

import { ElementType, PropsWithChildren } from "react"

interface CardWrapperProps extends PropsWithChildren {
    title?: string
    className?: string
    Icon?: ElementType
}

export const CardWrapper = ({ children, title, Icon, className }: CardWrapperProps) => {
    return (
        <section className={`${Styles.container} ${Styles[className!]}`}>
            <div className={Styles.header}>
                {Icon && <Icon />}
                <h1>{title}</h1>
            </div>
            
            {children}
        </section>
    )
}