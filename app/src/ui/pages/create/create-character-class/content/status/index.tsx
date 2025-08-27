import { useCreateClassData } from "../../../../../../stores/class/create-class-data.store"
import { AttributeInput } from "../../../../../components/attribute-input"
import { Input } from "../../../../../components/input"
import { Select } from "../../../../../components/select"
import { CreateClassCard } from "../card"

const MIN_CD = 1
const MAX_CD = 20
const MIN_BASE_HEALTH = 1
const MAX_BASE_HEALTH = 99

const diesHealth = ["4", "6", "8", "10", "12", "20"]

export const CreateClassStatus = () => {
    const { characterClass, setValue } = useCreateClassData()

    if(!setValue) return null
    
    return (
        <CreateClassCard part="status">
            <AttributeInput title="Classe de Dificuldade:">
                <Input 
                    className="light__bg__input"
                    name="difficultClass"
                    type="number"
                    min={MIN_CD}
                    max={MAX_CD}
                    onChange={(e) => setValue("difficultClass", e.target.value)}
                    defaultValue={characterClass?.difficultClass}
                />
            </AttributeInput>

            <AttributeInput title="Vida Base:">
                <Input 
                    className="light__bg__input"
                    name="baseHealth"
                    type="number"
                    min={MIN_BASE_HEALTH}
                    max={MAX_BASE_HEALTH}
                    onChange={(e) => setValue("baseHealth", e.target.value)}
                    defaultValue={characterClass?.baseHealth}
                />
            </AttributeInput>

            <AttributeInput title="Dado de Vida:">
                <Select 
                    defaultOption="Escolha o dado de vida" 
                    name="dieHealth" 
                    options={diesHealth} 
                    onChange={(e) => setValue("dieHealth", e.target.value)}
                    defaultValue={characterClass?.dieHealth}
                />
            </AttributeInput>
        </CreateClassCard>
    )
}