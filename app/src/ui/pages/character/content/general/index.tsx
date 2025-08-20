import Styles from "./styles.module.css"

import { AttributeCard } from "../../../../components/attribute-card"
import { CharacterClassCard } from "../../../../components/character-class-card"
import { AddIcon } from "../../../../components/icons/add"
import { ShieldIcon } from "../../../../components/icons/shield"
import { StarIcon } from "../../../../components/icons/star"
import { useCharacterNavigate } from "../../../../../stores/character/character-navigate.store"
import { useSelectedCharacter } from "../../../../../stores/character/selected-character.store"

export const CharacterContentGeneral = () => {
    const { selectedCharacter: character } = useSelectedCharacter()
    const { navigate } = useCharacterNavigate()
    
    if(navigate !== "general" || !character) return null
    
    return (
        <div className={Styles.container}>
            <h1>Geral:</h1>

            <div className={Styles.container__attributes}>
                <AttributeCard 
                    title="Classe de Armardura"
                    Icon={ShieldIcon}
                    value={character.armorClass}
                />

                <AttributeCard 
                    title="Vida total"
                    Icon={AddIcon}
                    value={character.hp}
                />

                <AttributeCard 
                    title="Level atual"
                    Icon={StarIcon}
                    value={character.level}
                />
            </div>
            
            <div className={Styles.line}></div>

            <CharacterClassCard 
                characterClass={character.characterClass} 
            />
        </div>
    )
}