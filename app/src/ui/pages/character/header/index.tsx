import Styles from "./styles.module.css"

import { Button } from "../../../components/button"
import { useNavigate } from "react-router"
import { useSelectedCharacter } from "../../../../stores/selected-character.store"

export const CharacterHeader = () => {
    const { selectedCharacter: character } = useSelectedCharacter()
    const navigate = useNavigate()
    
    if(!character) return null

    return (
        <section className={Styles.container}>
            <div className={Styles.container__width}>
                <Button 
                    className="login__button"
                    text="Voltar"
                    onClick={() => navigate(-1)}
                />

                <img src={character.image} alt="Avatar" />

                <div className={Styles.content}>
                    <h1>{character.name}</h1>
                    
                    <p>{`${character.race} • ${character.characterClass.name} • Level: ${character.level}`}</p>
                </div>
            </div>
        </section>
    )
}