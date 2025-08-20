import Styles from "./styles.module.css"

import { PropsWithChildren } from "react"
import { ClassStepType } from "../../../../../stores/class/create-class-step.store"
import { CardWrapper } from "../../../../components/card-wrapper"
import { Button } from "../../../../components/button"
import { useCreateClassCard } from "./use-create-class-card.hook"

interface CreateSkillContentCardProps extends PropsWithChildren {
    part: ClassStepType
}


// CHANGE THIS COMPONENT - UNION WITH CREATE SKILL CARD.
export const CreateClassCard = ({ part, children }: CreateSkillContentCardProps) => {
    const { step, steps } = useCreateClassCard()
    
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