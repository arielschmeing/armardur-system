import Styles from "./styles.module.css"

import { Badge } from "../../badge"
import { StarIcon } from "../../icons/star"
import { PropsWithChildren } from "react"

interface AbilityWrapperProps extends PropsWithChildren {
    title: string
    level: number
}

export const SkillWrapper = ({ level, title, children }: AbilityWrapperProps) => {
    return (
        <section className={Styles.container}>
            <div className={Styles.header}>
                <div>
                    <StarIcon />
                    <h2>{title}</h2>
                </div>

                <Badge type="level" value={`Nível ${level}`} />
            </div>

            {children}
        </section>
    )
}