import { useCreateClassData } from "../../../../../stores/class/create-class-data.store"
import { AttributeInput } from "../../../../components/attribute-input"
import { Select } from "../../../../components/select"
import { CreateClassCard } from "../card"

const PHYSICAL_MOD_OPTIONS = ["DEXTERITY", "STRENGTH", "CONSTITUTION"]
const CASTER_MOD_OPTIONS = ["MENTAL", "CHARISMA", "ELEMENTAL", "WISDOM"]

export const CreateClassMods = () => {
    const { characterClass, setValue } = useCreateClassData()

    if(!setValue) return null

    return (
        <CreateClassCard part="mods">
            <AttributeInput title="Modificador Físico:">
                <Select 
                    defaultOption="Escolha um modificador"
                    name="physicalMod"
                    options={PHYSICAL_MOD_OPTIONS}
                    onChange={(e) => setValue("physicalMod", e.target.value)}
                    defaultValue={characterClass?.physicalMod}
                />
            </AttributeInput>

            <AttributeInput title="Modificador Psiquico:">
                <Select 
                    defaultOption="Escolha um modificador"
                    name="casterMod"
                    options={CASTER_MOD_OPTIONS}
                    onChange={(e) => setValue("casterMod", e.target.value)}
                    defaultValue={characterClass?.casterMod}
                />
            </AttributeInput>
        </CreateClassCard>
    )
}