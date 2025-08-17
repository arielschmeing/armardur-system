import Styles from "./styles.module.css"
import { ElementType, PropsWithChildren } from "react"

interface AttributeCardProps extends PropsWithChildren {
    title: string
    value?: number | string
    Icon?: ElementType
}

export const AttributeCard = ({ title, value, Icon, children }: AttributeCardProps) => {
    return (
        <section className={Styles.container}>
            <div className={Styles.content}>
                {Icon && <Icon />}
                <div className={Styles.container__information}>
                    <h2>{title}</h2>
                    <p>{value ?? 0}</p>
                </div>
            </div>
            {children}
        </section>
    )
}