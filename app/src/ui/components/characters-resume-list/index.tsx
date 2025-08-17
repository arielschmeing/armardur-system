import Styles from "./styles.module.css"

import { Character } from "../../../interfaces/domains/character.interface"
import { CharacterResumeCard } from "../character-resume-card"

interface CharactersResumeListProps {
    characters: Character[]
}

export const CharactersResumeList = ({ characters }: CharactersResumeListProps) => {
    return (
        <div className={Styles.container}>
        {characters?.map((character, index) =>
            <CharacterResumeCard
                character={character} 
                key={index} 
            />
        )}
        </div>
    )
}