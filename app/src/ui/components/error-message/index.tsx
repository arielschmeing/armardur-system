import Styles from "./styles.module.css"

interface ErrorMessageProps {
    errorMessage?: string
}

export const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
    if(!errorMessage) return null
    
    return (
        <span className={Styles.text}>{errorMessage}</span>
    )
}