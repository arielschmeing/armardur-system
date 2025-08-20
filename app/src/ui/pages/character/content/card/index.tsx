import Styles from "./styles.module.css"

import { PropsWithChildren } from "react"
import { Button } from "../../../../components/button"
import { useUserAuth } from "../../../../../stores/user/user-auth.store"
import { Character } from "../../../../../interfaces/domains/character.interface"
import { useSelectedCharacter } from "../../../../../stores/character/selected-character.store"

type CharacterList = {
    [K in keyof Character]: Character[K] extends any[] ? K: never
}[keyof Character]

interface ContentCardProps extends PropsWithChildren {
    title: string
    description: string
    attribute: CharacterList
    setIsActive: (value: boolean) => void
}

export const ContentCard = ({ title, description, children, setIsActive, attribute }: ContentCardProps) => {
    const { user } = useUserAuth()
    const { selectedCharacter: character } = useSelectedCharacter()
    
    return (
        <div className={Styles.container}>
        {character?.[attribute].length !== 0 &&
            <h1>{title}</h1>
        }
        {character?.[attribute].length === 0 &&
            <div className={Styles.container__void}>
                <h1>O personagem não possui elementos...</h1>
                {user?.id === character?.userId &&
                    <p>{description}</p>
                }
            </div>
        }
        {children}
        {user?.id === character?.userId &&
            <Button
                className="login__button"
                text="ADICIONAR"
                onClick={() => setIsActive(true)}
            />
        }
        </div>  
    )
}