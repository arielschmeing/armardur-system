import { useState } from "react"
import { useUserAuth } from "../../../stores/user/user-auth.store"
import { hasModeratorPermission } from "../../../utils/has-moderator-permission.util"
import { illustrations } from "./illustrations"

export const useDashboard = () => {
    const { payload } = useUserAuth()
    const [hasPermission] = useState(hasModeratorPermission(payload()))
    
    const newIllustrations = () => {
        return [...illustrations, {
            link: `/user/${payload()?.id}/character/create`,
            title: "Criar Personagem",
            needPermission: false
        }] 
    }

    return {
        hasPermission,
        illustrations: newIllustrations()
    }
}