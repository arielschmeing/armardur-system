import { Permission } from "../enums/permission.enum"
import { Payload } from "../interfaces/payload.interface"

export const hasModeratorPermission = (payload: Payload | null) => {
    if(!payload) return false
    
    if(payload.scope.find(p => 
        p === Permission.MODERATOR || p === Permission.ADMIN)) 
        return true
    return false
}