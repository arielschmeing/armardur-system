import Styles from "./styles.module.css"

import { CardWrapper } from "../../../../components/card-wrapper"
import { PropsWithChildren } from "react"
import { Button } from "../../../../components/button"
import { SkillStepType } from "../../../../../stores/skill/create-skill-step.store"
import { useCreateSkillContentCard } from "./use-create-skill-content-card.hook"

interface CreateSkillContentCardProps extends PropsWithChildren {
    part: SkillStepType
}

export const CreateSkillContentCard = ({ part, children }: CreateSkillContentCardProps) => {
    const { step, steps } = useCreateSkillContentCard()
    
    if(step !== part) return null

    return (
        <CardWrapper>
            {children}

            <div className={Styles.container}>
                <Button
                    className="login__button"
                    text={steps[part].back.text}
                    id={steps[part].back.id}
                    onClick={steps[part].back.onClick}
                />

                <Button
                    className="login__button"
                    text={steps[part].next.text}
                    id={steps[part].next.id}
                    onClick={steps[part].next.onClick}
                />
            </div>
        </CardWrapper>
    )
}