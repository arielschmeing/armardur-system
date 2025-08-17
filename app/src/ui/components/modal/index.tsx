import { PropsWithChildren } from "react"
import Styles from "./styles.module.css"

interface ModalProps extends PropsWithChildren {
    isActive: boolean
    setIsActive: (value: boolean) => void
}

export const Modal = ({ isActive, setIsActive, children }: ModalProps) => {
    if(!isActive) return null

    return (
        <div className={Styles.background} onClick={() => setIsActive(false)} >
            <div className={Styles.container} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}