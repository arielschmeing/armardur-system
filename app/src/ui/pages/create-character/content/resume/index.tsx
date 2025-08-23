import Styles from "./styles.module.css"

import { CardWrapper } from "../../../../components/card-wrapper"
import { UserIcon } from "../../../../components/icons/user"
import { Input } from "../../../../components/input"

export const CreateCharacterResume = () => {
    
    return (
        <CardWrapper 
            Icon={UserIcon} 
            title="Criar Personagem"
        >
            <div className={Styles.container__input}>
                <p>Nome do personagem</p>
                <Input 
                    className=""
                    name="name"

                />
            </div>
        </CardWrapper>
    )
}