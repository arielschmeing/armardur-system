import Styles from "./styles.module.css"

import { Character } from "../../../interfaces/domains/character.interface"
import { CharacterResumeHeader } from "./header"
import { CharacterResumeContent } from "./content"

interface CharacterResumeCardProps {
    character: Character
}

export const CharacterResumeCard = ({ character }: CharacterResumeCardProps) => {
    return (
        <section className={Styles.container}>
            
            <CharacterResumeHeader 
                character={character}
            />

            <div className={Styles.line}></div>

            <CharacterResumeContent 
                character={character}
            />
        </section>
    )
}