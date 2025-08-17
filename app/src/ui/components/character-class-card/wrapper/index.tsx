import Styles from "./styles.module.css"

import { PropsWithChildren } from "react"
import { Badge } from "../../badge"
import { Button } from "../../button"
import { useNavigate } from "react-router"

interface CharacterClassWrapperProps extends PropsWithChildren {
    title: string
    difficultClass: number
    id: number
}

export const CharacterClassWrapper = ({ title, difficultClass, id, children }: CharacterClassWrapperProps) => {
    const navigate = useNavigate()
    
    return (
        <section className={Styles.container}>
            <div className={Styles.header}>
                <h1>{title}</h1>
                <Badge type="level" value={`Dificuldade: ${difficultClass}`} />
            </div>

            {children}

            <div className={Styles.line}></div>

            <Button className="login__button" text="VER MAIS" onClick={() => navigate(`/class/${id}`)} />
        </section>
    )
}