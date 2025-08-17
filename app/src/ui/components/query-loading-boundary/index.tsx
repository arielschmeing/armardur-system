import { PropsWithChildren, Suspense } from "react";
import { Loading } from "../loading";

export const QueryLoadingBoundary = ({ children }: PropsWithChildren) => {
    return (
        <Suspense
            fallback={<Loading />}
        >
            {children}
        </Suspense>
    )
}