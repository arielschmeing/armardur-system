import Styles from "./styles.module.css"

import { Link } from "react-router"

interface IllustrationBlockProps {
    link: string
    title: string
    img?: string
}

export const IllustrationBlock = ({ title, link }: IllustrationBlockProps) => {
    return (
        <Link to={link}>
            <div className={Styles.container}>
                <h1>{title}</h1>
            </div>
        </Link>
    )
}