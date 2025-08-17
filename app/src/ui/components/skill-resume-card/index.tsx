import Styles from "./styles.module.css"

import { Skill } from "../../../interfaces/domains/skill.interface"
import { PropsWithChildren, useState } from "react"
import { ArrowIcon } from "../icons/arrow"
import { Tag } from "../tag"

interface SkillResumeCardProps extends PropsWithChildren {
    skill: Skill
}

export const SkillResumeCard = ({ skill, children }: SkillResumeCardProps) => {
    const [isActive, setIsActive] = useState(false)
    
    return (
        <section className={Styles.container} onClick={() => setIsActive(!isActive)}>
            <div className={Styles.header__content}>
                <div className={Styles.header}>
                    <h2>{skill.name}</h2>

                    <div>
                        <p>DISTÂNCIA: {skill.range}</p>
                        <p>CONJURAÇÃO: {skill.castTime}</p>
                        <p>DURAÇÃO: {skill.duration}</p>
                    </div>
                </div>

                <div className={Styles.actions}>
                    {children}
                    <ArrowIcon className={`${Styles.icon} ${isActive ? Styles.icon__active : Styles.icon_disable}`} />
                </div>
            </div>

            {isActive &&
            <>
                <div className={Styles.line}></div>
                <Tag text={skill.description} />
            </>
            }
        </section>
    )
}