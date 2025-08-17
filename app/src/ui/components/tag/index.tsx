import Styles from "./styles.module.css"

interface TagProps {
    text: string
}

export const Tag = ({ text }: TagProps) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.line}></div>
            <p>{text}</p>
        </div>
    )
}