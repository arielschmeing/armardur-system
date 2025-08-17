import Styles from "./styles.module.css"

import { PageWrapper } from "../page-wrapper"

export const ErrorSection = () => {
    return (
        <PageWrapper>
            <h1 className={Styles.text}>Ops... Ocorreu um erro ao encontrar a página</h1>
        </PageWrapper>
    )
}