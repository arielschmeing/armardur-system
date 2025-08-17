import Styles from "./styles.module.css"

import { User } from "../../../interfaces/domains/user.interface"
import { Button } from "../button"

interface UserCardProps {
    user: User | undefined
}

export const UserCard = ({ user }: UserCardProps) => {
    if(!user) return null
    
    return (
        <section className={Styles.container}>
            <div>
                <div className={Styles.user__icon}>
                    <p>{user.name.split(" ").map(w => w[0]).join("").toUpperCase()}</p>
                    <div className={Styles.active__icon}></div>
                </div>

                <div className={Styles.content}>
                    <p>Email: {user.email}</p>
                    <p>Membro desde: {user.createdAt.toString().slice(0, 10).split("-").join("/")}</p>
                </div>
            </div>

            <Button 
                className="login__button"
                text="Editar perfil"
            />
        </section>
    )
}