import Styles from "./styles.module.css"

import { User } from "../../../interfaces/domains/user.interface"
import { CalendarIcon } from "../icons/calendar"
import { Button } from "../button"
import { ArrowIcon } from "../icons/arrow"
import { useNavigate } from "react-router"

interface UserResumeCardProps {
    user: User
}

export const UserResumeCard = ({ user }: UserResumeCardProps) => {
    const navigate = useNavigate()
    
    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <div className={Styles.perfil}>
                    <p>{user.name[0].toUpperCase()}</p>
                </div>

                <div className={Styles.information}>
                    <p>{user.name}</p>
                    <div>
                        <CalendarIcon />

                        <p>Cadastrado em {user.createdAt.toString().slice(0, 10)}</p>
                    </div>
                </div>
            </div>

            <Button 
                className="login__button" 
                text="Ver perfil"
                onClick={() => navigate(`/user/${user.id}`)}
            >
                <ArrowIcon />
            </Button>
        </div>
    )
}