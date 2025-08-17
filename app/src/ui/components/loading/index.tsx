import Styles from "./styles.module.css"

export const Loading = () => {
    return (
        <div className={Styles.spin__container}>
            <div className={Styles.spin__spinner}></div>
        </div>
    )
}