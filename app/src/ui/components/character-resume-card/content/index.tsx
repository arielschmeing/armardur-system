import Styles from "./styles.module.css"

import { BadgeBlock } from "../../badge-block"
import { Button } from "../../button"
import { AddIcon } from "../../icons/add"
import { SwordsIcon } from "../../icons/swords"
import { Character } from "../../../../interfaces/domains/character.interface"
import { ShieldIcon } from "../../icons/shield"
import { useNavigate } from "react-router"
import { modAttribute } from "../../../../utils/mod-attribute.util"

interface CharacterResumeContentProps {
    character: Character
}

export const CharacterResumeContent = ({ character }: CharacterResumeContentProps) => {
    const navigate = useNavigate()

    return (
        <div className={Styles.container}>
            <div>
                <BadgeBlock 
                    content={character.strength}
                    title="FOR"
                    Icon={SwordsIcon}
                    subContent={modAttribute(character.strength)}
                    className="main__variant"
                />

                <BadgeBlock 
                    content={character.armorClass}
                    title="CD"
                    Icon={ShieldIcon}
                    subContent={modAttribute(character.armorClass)}
                    className="main__variant"
                />

                <BadgeBlock 
                    content={character.hp}
                    title="HP"
                    Icon={AddIcon}
                    subContent="TOTAL"
                    className="main__variant"
                />
            </div>

            <Button 
                className="login__button"
                text="VER PERSONAGEM"
                onClick={() => navigate(`/user/${character.userId}/character/${character.id}`)}
            />
        </div>
    )
}