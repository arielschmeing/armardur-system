import { CreateWrapper } from "../create/create-wrapper"
import { CreateClassMods } from "./content/mods"
import { CreateClassResume } from "./content/resume"
import { CreateClassStatus } from "./content/status"
import { useCreateCharacterClass } from "./use-create-character-class.hook"

export const CreateCharacterClassPage = () => {
    const { step } = useCreateCharacterClass()
    
    return (
        <CreateWrapper
            title="CRIAÇÃO DE CLASSES"
            actualStep={step}
            steps={["resume", "status", "mods"]}
        >
            <CreateClassResume />
            <CreateClassStatus />
            <CreateClassMods />
        </CreateWrapper>
    )
}