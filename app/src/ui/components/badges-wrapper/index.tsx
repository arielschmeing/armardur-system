import Styles from "./styles.module.css"
import { Badge } from "../badge"
import { ElementType } from "react"

interface BadgesWrapperProps {
    Icon: ElementType
    title: string
    badges: string[] | undefined
}

export const BadgesWrapper = ({ Icon, title, badges }: BadgesWrapperProps) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.header}>
                <Icon />
                <h2>{title}</h2>
            </div>

            <div className={Styles.content}>
            {badges?.map((badge, index) => 
                <Badge 
                    type={badge.toLowerCase()} 
                    value={badge.toUpperCase()} 
                    key={index} 
                />
            )}
            </div>
        </div> 
    )
}