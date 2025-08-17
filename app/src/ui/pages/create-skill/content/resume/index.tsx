import Styles from "./styles.module.css"

import { Input } from "../../../../components/input"
import { TextArea } from "../../../../components/text-area"
import { CreateSkillContentCard } from "../card"
import { CreateSkillChildrenProps } from "../../../../../interfaces/create-skill-children-props.interface"

export const CreateSkillContentResume = ({ skill, setValue }: CreateSkillChildrenProps) => {
    return (
        <CreateSkillContentCard part="resume">
            <div className={Styles.input__container}>
                <p>Nome:</p>
                <Input 
                    name="name"
                    className="light__bg__input"
                    placeholder="Ex.: Bola de Fogo"
                    onChange={(e) => setValue("name", e.target.value)}
                    defaultValue={skill?.name}
                />
            </div>

            <div className={Styles.input__container}>
                <p>Sobre:</p>
                <TextArea 
                    className="light__bg__textarea"
                    name="description"
                    placeholder="Ex.: Ao atingir o alvo recebe 1d4 de dano."
                    onChange={(e) => setValue("description", e.target.value)}
                    defaultValue={skill?.description}
                />
            </div>
        </CreateSkillContentCard>
    )
}