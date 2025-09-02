import Styles from "./styles.module.css"

import { Character } from "../../../../interfaces/domains/character.interface"
import { Badge } from "../../badge"

interface CharacterResumeHeaderProps {
    character: Character
}

export const CharacterResumeHeader = ({ character }: CharacterResumeHeaderProps) => {
    return (
        <div className={Styles.container}>
            <img 
                src={character.image} 
                alt="Avatar" 
                onError={(e) => (e.currentTarget.src = "/logos/logo-armardur-bg-white.png")}
            />
            
            <div>
                <div>
                    <h2>{character.name}</h2>
                    <Badge type="level" value={`Level: ${character.level}`} />
                </div>

                <div className={Styles.content}>
                    <p>{character.race}</p>
                    <p>{character.characterClass.name}</p>
                </div>
            </div>
        </div>
    )
}