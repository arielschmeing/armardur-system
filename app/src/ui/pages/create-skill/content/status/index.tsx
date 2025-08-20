import { Input } from "../../../../components/input"
import { CreateSkillContentCard } from "../card"
import { AttributeInput } from "../../../../components/attribute-input"
import { useCreateSkillData } from "../../../../../stores/skill/create-skill-data.store"

const MIN_STATUS = 0
const MAX_STATUS = 999
const MAX_LEVEL = 20

export const CreateSkillContentStatus = () => {
    const { skill, setValue } = useCreateSkillData()

    if(!setValue) return null

    return (
        <CreateSkillContentCard part="status">
            <AttributeInput title="Level:">
                <Input 
                    className="light__bg__input"
                    type="number"
                    name="level"
                    min={MIN_STATUS}
                    max={MAX_LEVEL}
                    onChange={(e) => setValue("level", e.target.value)}
                    defaultValue={skill?.level}
                />
            </AttributeInput>

            <AttributeInput title="Distância:">
                <Input 
                    className="light__bg__input"
                    type="number"
                    name="range"
                    min={MIN_STATUS}
                    max={MAX_STATUS}
                    onChange={(e) => setValue("range", e.target.value)}
                    defaultValue={skill?.range}
                />
            </AttributeInput>

            <AttributeInput title="Duração:">
                <Input 
                    className="light__bg__input"
                    type="number"
                    name="duration"
                    min={MIN_STATUS}
                    max={MAX_STATUS}
                    onChange={(e) => setValue("duration", e.target.value)}
                    defaultValue={skill?.duration}
                />
            </AttributeInput>

            <AttributeInput title="Conjuração:">
                <Input 
                    className="light__bg__input"
                    type="number"
                    name="castTime"
                    min={MIN_STATUS}
                    max={MAX_STATUS}
                    onChange={(e) => setValue("castTime", e.target.value)}
                    defaultValue={skill?.castTime}
                />
            </AttributeInput>
        </CreateSkillContentCard>
    )
}