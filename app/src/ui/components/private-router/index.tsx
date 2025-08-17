import { Navigate, useLocation } from "react-router"
import { useUserAuth } from "../../../stores/user-auth.store"
import { Layout } from "../layout"
import { useEffect, useState } from "react"

export const PrivateRouter = () => {    
    const { payload } = useUserAuth()
    const { pathname } = useLocation()
    const [isValidToken, setIsValidToken] = useState(true)

    useEffect(() => {
        const handlerValidation = () => {
            const decode = payload()

            if(!decode) return setIsValidToken(false)

            if(decode.exp < Date.now() / 1000) setIsValidToken(false)
        }
        handlerValidation()
    }, [])

    if(pathname === "/" || !isValidToken) return <Navigate to="/login" replace />

    return <Layout />
}