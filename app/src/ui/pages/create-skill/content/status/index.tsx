import Styles from "./styles.module.css"

import { Input } from "../../../../components/input"
import { CreateSkillContentCard } from "../card"
import { CreateSkillChildrenProps } from "../../../../../interfaces/create-skill-children-props.interface"

const MIN_STATUS = 0
const MAX_STATUS = 999
const MAX_LEVEL = 20

export const CreateSkillContentStatus = ({ skill, setValue }: CreateSkillChildrenProps) => {
    return (
        <CreateSkillContentCard part="status">
            <div className={Styles.input__container}>
                <p>Level:</p>
                <Input 
                    className="light__bg__input"
                    type="number"
                    name="level"
                    min={MIN_STATUS}
                    max={MAX_LEVEL}
                    onChange={(e) => setValue("level", e.target.value)}
                    defaultValue={skill?.level}
                />
            </div>

            <div className={Styles.input__container}>
                <p>Distância:</p>
                <Input 
                    className="light__bg__input"
                    type="number"
                    name="range"
                    min={MIN_STATUS}
                    max={MAX_STATUS}
                    onChange={(e) => setValue("range", e.target.value)}
                    defaultValue={skill?.range}
                />
            </div>

            <div className={Styles.input__container}>
                <p>Duração:</p>
                <Input 
                    className="light__bg__input"
                    type="number"
                    name="duration"
                    min={MIN_STATUS}
                    max={MAX_STATUS}
                    onChange={(e) => setValue("duration", e.target.value)}
                    defaultValue={skill?.duration}
                />
            </div>

            <div className={Styles.input__container}>
                <p>Conjuração:</p>
                <Input 
                    className="light__bg__input"
                    type="number"
                    name="castTime"
                    min={MIN_STATUS}
                    max={MAX_STATUS}
                    onChange={(e) => setValue("castTime", e.target.value)}
                    defaultValue={skill?.castTime}
                />
            </div>
        </CreateSkillContentCard>
    )
}