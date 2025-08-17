import { useSelectedClass } from "../../../stores/selected-class.store"
import { AttributeCard } from "../attribute-card"
import { CardWrapper } from "../card-wrapper"
import { StarIcon } from "../icons/star"

export const ClassAttributeCard = () => {
    const { selectedClass: characterClass } = useSelectedClass()

    return (
        <CardWrapper title="Atributos da Classe" Icon={StarIcon} className="container__class" >
            <AttributeCard title="Modificador Físico" value={characterClass!.casterMod} />
            <AttributeCard title="Modificador de Conjurador" value={characterClass!.physicalMod} />

            <AttributeCard title="Dado de Vida" value={`1d${characterClass!.dieHealth}`} />
            <AttributeCard title="Vida Base" value={characterClass!.baseHealth} />

            <AttributeCard title="Classe de Dificuldade" value={characterClass!.difficultClass} />
        </CardWrapper>
    )
}