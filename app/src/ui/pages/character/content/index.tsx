import { CardWrapper } from "../../../components/card-wrapper"
import { CharacterContentAttributes } from "./attributes"
import { CharacterContentElements } from "./elements"
import { CharacterContentExpertises } from "./expertises"
import { CharacterContentGeneral } from "./general"
import { CharacterContentSkills } from "./skills"

export const CharacterContent = () => {
    return (
        <CardWrapper className="container__class">
            <CharacterContentGeneral />

            <CharacterContentAttributes />

            <CharacterContentSkills />

            <CharacterContentElements />

            <CharacterContentExpertises />
        </CardWrapper>
    )
}