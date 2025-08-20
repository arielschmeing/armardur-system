import { TextArea } from "../../../../components/text-area"
import { CreateSkillContentCard } from "../card"
import { AttributeInput } from "../../../../components/attribute-input"
import { Input } from "../../../../components/input"
import { useCreateSkillData } from "../../../../../stores/skill/create-skill-data.store"

export const CreateSkillContentResume = () => {
    const { skill, setValue } = useCreateSkillData()

    if(!setValue) return null

    return (
        <CreateSkillContentCard part="resume">
            <AttributeInput title="Nome:">
                <Input 
                    className="light__bg__input"
                    name="name"
                    placeholder="Ex.: Bola de Fogo"
                    onChange={(e) => setValue("name", e.target.value)}
                    defaultValue={skill?.name}
                />
            </AttributeInput>

            <AttributeInput title="Sobre:">
                <TextArea 
                    className="light__bg__textarea"
                    name="description"
                    placeholder="Ex.: Ao atingir o alvo recebe 1d4 de dano."
                    onChange={(e) => setValue("description", e.target.value)}
                    defaultValue={skill?.description}
                />
            </AttributeInput>
        </CreateSkillContentCard>
    )
}