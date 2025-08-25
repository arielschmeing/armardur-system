import { Button } from "../../../../components/button"
import { AddIcon } from "../../../../components/icons/add"
import Styles from "./styles.module.css"

export const CreateCharacterActions = () => {
    return (
        <div className={Styles.container}>
            <Button 
                className="login__button"
                text="CRIAR PERSONAGEM"
            >
                <AddIcon />
            </Button>
        </div>
    )
}