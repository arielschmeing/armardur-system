import { useNavigate } from "react-router"
import { useEffect } from "react"
import { useForm } from "../../../hooks/use-form.hook"
import { useUserAuth } from "../../../stores/user-auth.store"
import { LoginUser, validations } from "../../../interfaces/login-user.interface"
import { useUpdateUser } from "../../../hooks/use-update-user.hook"

export const useLogin = () => {
    const navigate = useNavigate()
    const { data, setValue, errors, submit } = useForm<LoginUser>({ validations })
    const { token, logout } = useUserAuth()
    const { handlerUpdateUser } = useUpdateUser()
    
    useEffect(() => {
        if(token) logout()
    }, [])

    const handlerLoginUser = async () => {
        if(!submit()) return

        await handlerUpdateUser({
            email: data.email,
            password: data.password
        })
    }

    return {
        setValue,
        errors,
        handlerLoginUser,
        navigate
    }
}