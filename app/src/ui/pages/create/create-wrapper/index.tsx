import Styles from "./styles.module.css"

import { PageWrapper } from "../../../components/page-wrapper"
import { PropsWithChildren } from "react"

interface CreateWrapperProps extends PropsWithChildren {
    actualStep: string
    steps: string[]
    title: string
}

export const CreateWrapper = ({ actualStep, steps, title, children }: CreateWrapperProps) => {
    return (
        <PageWrapper>
            <h1 className={Styles.title}>{title}</h1>

            <div className={Styles.container__progress}>
                {steps.map((step, index) => 
                    <p id={actualStep === step ? Styles.check : ""} key={step}>{index + 1}</p>
                )}
            </div>

            {children}
        </PageWrapper>
    )
}