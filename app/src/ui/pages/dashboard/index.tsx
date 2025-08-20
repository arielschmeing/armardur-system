import Styles from "./styles.module.css"

import { PageWrapper } from "../../components/page-wrapper"
import { IllustrationBlock } from "../../components/illustration-block"
import { Logo } from "../../components/logo"
import { useDashboard } from "./use-dashboard.hook"

export const DashboardPage = () => {    
    const { hasPermission, illustrations } = useDashboard()

    return (
        <PageWrapper>
            <div className={Styles.header}>
                <div>
                    <h1>Bem-vindo a Armardur.</h1>
                    <p>Gerencie suas fichas de RPG e explore o sistema de Armardur a vontade.</p>
                </div>

                <Logo size="200px" />
            </div>

            <div className={Styles.content}>
            {illustrations.filter(l => l.needPermission === false || hasPermission === l.needPermission)
                .map(({ link, title }) => 
                <IllustrationBlock 
                    link={link}
                    title={title}
                    key={link}
                />
            )}
            </div>
        </PageWrapper>
    )
}