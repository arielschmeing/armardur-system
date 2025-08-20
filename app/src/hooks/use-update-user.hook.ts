import { useMutation } from "@tanstack/react-query"
import { loginUser } from "../services/user.service"
import { LoginUser } from "../interfaces/login-user.interface"
import { useUserAuth } from "../stores/user/user-auth.store"
import { useNavigate } from "react-router"

export const useUpdateUser = () => {
    const navigate = useNavigate()
    const { updateToken, updateUser } = useUserAuth()
    const { mutateAsync: loginUserFn } = useMutation({
        mutationFn: loginUser
    })
    
    const handlerUpdateUser = async ({ email, password }: LoginUser) => {
        const response = await loginUserFn({
            email,
            password
        })

        if(!response) return

        updateToken(response.accessToken)
        updateUser(response.user)

        navigate("/dashboard")
    }

    return {
        handlerUpdateUser
    }
}