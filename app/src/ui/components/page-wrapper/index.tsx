import Styles from "./styles.module.css"

import { QueryLoadingBoundary } from "../query-loading-boundary"
import { PropsWithChildren } from "react"

interface PageWrapperInnerProps extends PropsWithChildren {
    hasSuspense?: boolean
}

const PageWrapperInner = ({ children }: PropsWithChildren) => {
    return (
        <main className={Styles.container}>
            <div className={Styles.content}>
                {children}
            </div>
        </main>
    )
}

export const PageWrapper = ({ children, hasSuspense }: PageWrapperInnerProps) => {
    if(hasSuspense) return (
        <QueryLoadingBoundary>
            <PageWrapperInner>
                {children}
            </PageWrapperInner>
        </QueryLoadingBoundary>
    )

    return (
        <PageWrapperInner>
            {children}
        </PageWrapperInner>
    )
}