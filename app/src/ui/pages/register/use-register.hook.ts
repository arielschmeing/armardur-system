import { postUser } from "../../../services/user.service"
import { useForm } from "../../../hooks/use-form.hook"
import { RegisterUser } from "../../../interfaces/register-user.interface"
import { useMutation } from "@tanstack/react-query"
import { useUpdateUser } from "../../../hooks/use-update-user.hook"
import { useNavigate } from "react-router"
import { validations } from "../../../interfaces/validations/register-user.validations"

export const useRegister = () => {
    const navigate = useNavigate()
    const { handlerUpdateUser } = useUpdateUser()
    const { data, errors, setValue, submit } = useForm<RegisterUser>({ validations })
    const { mutateAsync: postUserFn } = useMutation({
        mutationFn: postUser
    })

    const handlerSubmitUser = async () => {
        if(!submit() && data.password === data.passwordConfirmation) return

        const response = await postUserFn({
            email: data.email,
            name: data.name,
            password: data.password,
            passwordConfirmation: data.passwordConfirmation
        })

        if(!response) return

        await handlerUpdateUser({
            email: data.email,
            password: data.password
        })
    }

    return {
        handlerSubmitUser,
        setValue,
        errors,
        navigate
    }
}