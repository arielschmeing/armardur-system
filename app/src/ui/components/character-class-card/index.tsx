import { CharacterClass } from "../../../interfaces/domains/character-class.interface"
import { AttributeCard } from "../attribute-card"
import { BadgesWrapper } from "../badges-wrapper"
import { CharacterClassWrapper } from "./wrapper"
import { AddIcon } from "../icons/add"
import { DiceIcon } from "../icons/dice"
import { TargetIcon } from "../icons/target"
import { Tag } from "../tag"

interface CharacterClassCardProps {
    characterClass: CharacterClass
}

export const CharacterClassCard = ({ characterClass }: CharacterClassCardProps) => {
    
    if(!characterClass.id) return null
    
    return (
        <CharacterClassWrapper 
            difficultClass={characterClass.difficultClass} 
            title={characterClass.name} 
            id={characterClass.id}
        >
            <Tag text={characterClass.description} />

            <AttributeCard Icon={AddIcon} title="VIDA BASE" value={characterClass.baseHealth} />
            <AttributeCard Icon={DiceIcon} title="DADO DE VIDA" value={characterClass.dieHealth} />
        
            <BadgesWrapper 
                Icon={TargetIcon} 
                badges={[`Físico: ${characterClass.physicalMod}`, `Conjuração: ${characterClass.casterMod}`]} 
                title="MODIFICADORES" 
            />
        </CharacterClassWrapper>
    )
}