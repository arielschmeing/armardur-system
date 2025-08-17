import Styles from "./styles.module.css"

import { PageWrapper } from "../../components/page-wrapper"
import { IllustrationBlock } from "../../components/illustration-block"
import { useUserAuth } from "../../../stores/user-auth.store"
import { hasModeratorPermission } from "../../../utils/has-moderator-permission.util"
import { Logo } from "../../components/logo"
import { useState } from "react"
import { illustrations } from "./illustrations"

export const DashboardPage = () => {    
    const { payload } = useUserAuth()
    const [hasPermission] = useState(hasModeratorPermission(payload()))
    
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