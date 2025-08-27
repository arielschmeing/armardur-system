import { useCreateClassData } from "../../../../../../stores/class/create-class-data.store"
import { AttributeInput } from "../../../../../components/attribute-input"
import { Input } from "../../../../../components/input"
import { TextArea } from "../../../../../components/text-area"
import { CreateClassCard } from "../card"

export const CreateClassResume = () => {
    const { characterClass, setValue } = useCreateClassData()

    if(!setValue) return null

    return (
        <CreateClassCard part="resume">
            <AttributeInput title="Nome:">
                <Input 
                    className="light__bg__input"
                    name="castTime"
                    onChange={(e) => setValue("name", e.target.value)}
                    placeholder="Ex.: Mago Arcano"
                    defaultValue={characterClass?.name}
                />
            </AttributeInput>

            <AttributeInput title="Sobre:">
                <TextArea
                    className="light__bg__textarea"
                    name="description"
                    placeholder="Ex.: Ao atingir o alvo recebe 1d4 de dano."
                    onChange={(e) => setValue("description", e.target.value)}
                    defaultValue={characterClass?.description}
                />
            </AttributeInput>
        </CreateClassCard>
    )
}