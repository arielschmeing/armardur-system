import { Navigate, Outlet, useLocation } from "react-router"
import { useUserAuth } from "../../../stores/user-auth.store"
import { Permission } from "../../../enums/permission.enum"

export const ModeratorRouter = () => {
    const { pathname } = useLocation()
    const { payload } = useUserAuth()

    const hasPermission = () => {
        const decode = payload()

        if(decode!.scope.find(s => s === Permission.MODERATOR || s === Permission.ADMIN)) return true
    }

    if(pathname == "/moderator/skill/create" && !hasPermission()) return <Navigate to="/dashboard" replace />

    return <Outlet />
}