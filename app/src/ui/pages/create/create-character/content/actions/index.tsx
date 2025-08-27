import Styles from "./styles.module.css"

import { Button } from "../../../../../components/button"
import { AddIcon } from "../../../../../components/icons/add"
import { useCreateCharacterActions } from "./use-create-character-actions.hook"

export const CreateCharacterActions = () => {
    const { handlerSubmitCharacter } = useCreateCharacterActions()
    
    return (
        <div className={Styles.container}>
            <Button 
                className="login__button"
                text="CRIAR PERSONAGEM"
                onClick={handlerSubmitCharacter}
            >
                <AddIcon />
            </Button>
        </div>
    )
}