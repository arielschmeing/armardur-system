import { PropsWithChildren } from "react"
import Styles from "./styles.module.css"

interface ListWrapperProps extends PropsWithChildren {
    list: Object[]
}

export const ListWrapper = ({ list, children }: ListWrapperProps) => {
    return (
        <section className={Styles.container}>
            {list &&
                children
            }
        </section>
    )
}